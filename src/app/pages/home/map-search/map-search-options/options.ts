export class Option {
    key: number;
    title: string;
    isSelect: boolean;
    parent: Options;

    constructor(obj: OptCategoryItem, parent: Options) {
        this.key = obj.key;
        this.title = obj.title;
        this.isSelect = true;
        this.parent = parent;
    }

    select(status: boolean) {
        this.isSelect = status;
        this.parent.change();
    }
}

export class Options {
    options: Array<Option> = [];
    title: string;
    length: number;
    private _indeterminate = false;
    private _key = 0;
    private value: string;

    constructor(category: OptCategory) {
        this.title = category.title;
        this.value = category.value;

        category.options.forEach((el: OptCategoryItem) => {
            this.options.push(new Option(el, this));
        });

        this.change();
    }

    change() {
        this._key = 0;

        const filterOptions = this.options.filter((option) => option.isSelect);
        this.length = filterOptions.length;

        filterOptions.forEach((option) => (this._key += option.key));
    }

    reset() {
        this.options.forEach((option) => option.isSelect);
        this.change();
    }

    allSelect() {
        this.options.forEach((el: Option) => {
            el.select(true);
        });
    }

    allClose() {
        this.options.forEach((el: Option) => {
            el.select(false);
        });
    }

    get indeterminate() {
        return !this.empty && !this.isAll;
    }

    set indeterminate(status: boolean) {
        this._indeterminate = status;
    }

    get empty() {
        return this._key === 0;
    }

    get isAll() {
        return this.options.every((el) => el.isSelect);
    }

    get key() {
        return `${this.value}=${this.empty ? 65535 : this._key}`;
    }

    get lastOptions() {
        return this.length === 1;
    }
}
