import { Component, OnInit, Input } from '@angular/core';
import { radar_option, curve_option } from './models';

@Component({
    selector: 'map-detail-charts',
    templateUrl: './map-detail-charts.component.html',
    styleUrls: ['./map-detail-charts.component.scss'],
})
export class MapDetailChartsComponent implements OnInit {
    private _mapData: any;
    aim: number;
    speed: number;
    star: number;
    rangeValue: number;

    radarOptions: any;
    currveOptions: any;

    chartType = 'currve';

    @Input()
    set mapData(detail) {
        this._mapData = detail;
        this.update();
    }

    constructor() {}

    ngOnInit() {
        this.update();
    }

    update() {
        this.updateRadarOptionValue();
        this.updateCurveOptionData();
        this.setRange();
    }

    setRange() {
        this.star = this._mapData.star;
        this.aim = this._mapData.aim;
        this.speed = this.star - this.aim;
        this.rangeValue = 100 * (this.aim / this.star);
    }

    updateRadarOptionValue() {
        const mapdata = this._mapData;
        const data = [mapdata.AR, mapdata.CS, mapdata.HP, mapdata.OD];
        radar_option.series[0].data[0].value = data;
        this.radarOptions = { ...radar_option };
    }

    updateCurveOptionData() {
        const mapdata = this._mapData;
        const aim = mapdata.strain_aim.split('');
        const speed = mapdata.strain_speed.split('');
        const total = aim.map(
            (count, index) => Number(count) + Number(speed[index])
        );

        if (total.length > 0) {
            curve_option.series[0].data = total;
            this.currveOptions = { ...curve_option };
        } else {
            this.currveOptions = null;
            this.chartType = 'radar';
        }
    }
}
