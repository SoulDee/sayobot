import { Component, OnInit, Input } from '@angular/core';
import { radar_option, curve_option } from './models';

// TODO 去除 echarts 的动画
// TODO 拆分成两个表单，通过ng-content插入
// TODO 不要一下全部显示，通过按钮组来对表单分类
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
        curve_option.series[0].data = total;
        this.currveOptions = { ...curve_option };
    }
}
