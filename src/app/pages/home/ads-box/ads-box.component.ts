import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import Swiper from 'swiper';
import { Ad } from '@app/shared/models';
import { AdsService } from '@app/core/service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ads-box',
    templateUrl: './ads-box.component.html',
    styleUrls: ['./ads-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsBoxComponent implements OnInit, OnDestroy {
    swiper: Swiper;
    slides: Ad[];
    timer = null;

    destory$ = new Subject();

    constructor(private ads: AdsService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.ads
            .getAds()
            .pipe(takeUntil(this.destory$))
            .subscribe((res) => {
                this.slides = res.data;
                this.timer = setTimeout(() => {
                    this.initSwiper();
                    this.cdr.markForCheck();
                }, 0);
            });
    }

    initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
            observer: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            initialSlide: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    navTo(url: string) {
        window.open(url);
    }

    ngOnDestroy() {
        clearTimeout(this.timer);
        this.timer = null;
        this.destory$.next();
        this.destory$.complete();
    }
}
