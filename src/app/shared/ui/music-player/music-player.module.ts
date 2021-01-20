import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MusicPlayerComponent } from './music-player.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [MusicPlayerComponent],
    imports: [CommonModule, MatIconModule, DragDropModule],
    exports: [MusicPlayerComponent],
})
export class MusicPlayerModule {}
