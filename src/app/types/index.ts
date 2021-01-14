interface OptConfig {
    [category: string]: OptCategory;
}

interface OptCategory {
    title: string;
    value: string;
    options: Array<OptCategoryItem>;
}

interface OptCategoryItem {
    title: string;
    key: number;
}
