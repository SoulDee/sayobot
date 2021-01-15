/**
 * @description 分类项
 * @example 模式 | 语言 等
 */
export interface CategoryOptions {
    title: string;
    key: string;
    options: CategoryOptionsIns[];
}

/**
 * @description 每个分类下的子项
 * @example 语言: 中文 | 英文 | 法文 ...
 */
export interface CategoryOptionsIns {
    title: string;
    key: number;
}

/**
 * @description 区间选择
 * @example start 0 - 10
 */
export interface RangeSlider {
    title: string;
    key: string;
    min: number;
    max: number;
}

/**
 * @description 区间选择结果值
 * @example start 0 - 10
 */
export interface RangeItem {
    low: number;
    high: number;
}
