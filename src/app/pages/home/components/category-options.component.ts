import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryOptions } from '@app/types';

@Component({
    selector: 'category-options',
    template: `
        <div class="category-container">
            <div class="category-title">
                {{ categoryList?.title }}
            </div>
            <div class="opts-container">
                <mat-checkbox
                    (change)="masterToggoe($event?.checked)"
                    [checked]="isAllSelected"
                    [indeterminate]="indeterminate"
                    [disabled]="isOnly || isAllSelected"
                    >全部
                </mat-checkbox>

                <ng-container *ngFor="let ins of categoryList?.options">
                    <mat-checkbox
                        (click)="$event.stopPropagation()"
                        (change)="handleInsChange($event?.checked, ins?.key)"
                        [checked]="selected.has(ins?.key)"
                        [disabled]="isOnly && selected.has(ins?.key)"
                        >{{ ins?.title }}
                    </mat-checkbox>
                </ng-container>
            </div>
        </div>
    `,
    styles: [
        `
            .category-container {
                display: flex;
                margin-bottom: 2rem;
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

    ngOnInit() {
        const selectedOpt = this.getOpts();

        if (selectedOpt) {
            this.categoryList.options
                .filter((opt) => (selectedOpt as number[]).includes(opt.key))
                .forEach((opt) => {
                    this.selected.add(opt.key);
                });
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

    private getOpts() {
        const optsAll = JSON.parse(localStorage.getItem('searchOpts'));
        if (optsAll) {
            return optsAll[this.categoryList.key] || null;
        }
        return null;
    }

    private saveOpts() {
        let searchOpts = JSON.parse(localStorage.getItem('searchOpts')) || {};
        searchOpts[this.categoryList.key] = [...this.selected];
        localStorage.setItem('searchOpts', JSON.stringify(searchOpts));
    }

    private handleChange() {
        this.saveOpts();
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
