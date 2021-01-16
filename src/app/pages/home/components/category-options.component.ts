import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SEARCH_CHECKED_KEY } from '@app/core/config';
import { StorageService } from '@app/core/service/storage.service';
import { CategoryOptions } from '@app/types';

@Component({
    selector: 'category-options',
    template: `
        <div class="category-container">
            <div class="category-title">
                {{ categoryList?.title | translate }}
            </div>
            <div class="opts-container">
                <mat-checkbox
                    (change)="masterToggoe($event?.checked)"
                    [checked]="isAllSelected"
                    [indeterminate]="indeterminate"
                    [disabled]="isAllSelected"
                    >全部
                </mat-checkbox>

                <ng-container *ngFor="let ins of categoryList?.options">
                    <mat-checkbox
                        (click)="$event.stopPropagation()"
                        (change)="handleInsChange($event?.checked, ins?.key)"
                        [checked]="selected.has(ins?.key)"
                        [disabled]="isOnly && selected.has(ins?.key)"
                        >{{ ins?.title | translate }}
                    </mat-checkbox>
                </ng-container>
            </div>
        </div>
    `,
    styles: [
        `
            .category-container {
                display: flex;
                margin-bottom: 1rem;
            }
            .category-title {
                width: 100px;
            }
            .opts-container {
                flex: 1;
            }
            mat-checkbox {
                margin-right: 1rem;
            }
        `,
    ],
})
export class CategoryOptionsComponent implements OnInit {
    @Input() categoryList!: CategoryOptions;
    @Output() change = new EventEmitter<number>();

    selected = new Set<number>();

    isAllSelected!: boolean;
    indeterminate!: boolean;
    isOnly!: boolean;

    constructor(private storage: StorageService) {}

    ngOnInit() {
        const selectedOpt = this.storage.getChild<number[]>(
            SEARCH_CHECKED_KEY,
            this.categoryList.key
        );

        if (selectedOpt) {
            this.categoryList.options
                .filter((opt) => selectedOpt.includes(opt.key))
                .forEach((opt) => this.selected.add(opt.key));
        } else {
            this.selectAll();
        }

        this.updateCheckStatus();
    }

    updateCheckStatus() {
        this.isAllSelected = this.isAllSelect();
        this.indeterminate = this.hasValue();
        this.isOnly = this.selected.size <= 1;
        this.handleChange();
    }

    masterToggoe(checked: boolean) {
        if (checked) this.selectAll();
        this.updateCheckStatus();
    }

    handleInsChange(checked: boolean, key: number) {
        checked ? this.selected.add(key) : this.selected.delete(key);
        this.updateCheckStatus();
    }

    private handleChange() {
        this.storage.saveChild(SEARCH_CHECKED_KEY, this.categoryList.key, [
            ...this.selected,
        ]);
        const total = [...this.selected].reduce((prev, next) => prev + next);
        this.change.emit(total);
    }

    private selectAll() {
        this.categoryList.options.forEach((opt) => this.selected.add(opt.key));
    }

    private isAllSelect() {
        return this.selected.size === this.categoryList.options.length;
    }

    private hasValue() {
        return this.selected.size > 0 && !this.isAllSelected;
    }
}
