import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PreMap } from '@app/shared/models';

@Component({
    selector: 'map-search-results',
    template: `
        <ng-container *ngIf="maps">
            <div class="maps-wrap">
                <map-search-result-item
                    *ngFor="let mapItem of maps"
                    [map]="mapItem"
                ></map-search-result-item>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .maps-wrap {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -5px;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapSearchResultsComponent {
    @Input() maps: PreMap[];
}
