import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlayerVolumeControlComponent } from './player-volume-control/player-volume-control.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MusicPlayerComponent, PlayerVolumeControlComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        DragDropModule,
        MatSliderModule,
    ],
    exports: [MusicPlayerComponent],
})
export class MusicPlayerModule {}
