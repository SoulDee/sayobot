import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MapBidDetail } from '@app/shared/models';
import { radar_option, curve_option } from './models';

@Component({
    selector: 'map-detail-charts',
    templateUrl: './map-detail-charts.component.html',
    styleUrls: ['./map-detail-charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDetailChartsComponent {
    private _mapData: MapBidDetail;

    aim: number;
    speed: number;
    star: number;
    rangeValue: number;

    radarOptions: any;
    currveOptions: any;

    chartType = 'currve';

    @Input()
    set mapData(detail: MapBidDetail) {
        this._mapData = detail;
        this.update();
    }

    private setRange() {
        this.star = this._mapData.star;
        this.aim = this._mapData.aim;
        this.speed = this.star - this.aim;
        this.rangeValue = 100 * (this.aim / this.star);
    }

    private updateRadarOptionValue() {
        const data = [
            this._mapData.AR,
            this._mapData.CS,
            this._mapData.HP,
            this._mapData.OD,
        ];
        radar_option.series[0].data[0].value = data;
        this.radarOptions = { ...radar_option };
    }

    private updateCurveOptionData() {
        const total = this.getTotal();
        if (total.length > 0) {
            curve_option.series[0].data = [...total];
            this.currveOptions = { ...curve_option };
        } else {
            this.currveOptions = null;
            this.chartType = 'radar';
        }
    }

    private update() {
        this.updateRadarOptionValue();
        this.updateCurveOptionData();
        this.setRange();
    }

    private getTotal() {
        const aimArr = this._mapData.strain_aim
            .split('')
            .map((n: string) => Number(n));
        const speedArr = this._mapData.strain_speed
            .split('')
            .map((n: string) => Number(n));

        let total = [];
        for (let i = 0; i < aimArr.length; i++) {
            total.push(aimArr[i] + speedArr[i]);
        }
        return total;
    }
}
