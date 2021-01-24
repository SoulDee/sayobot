import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    template: `
        <img [src]="data?.url" />
        <div mat-dialog-actions align="center">
            <button mat-raised-button color="accent" mat-dialog-close>
                Close
            </button>
        </div>
    `,
})
export class BigPictureComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) {}

    ngOnInit(): void {}
}
