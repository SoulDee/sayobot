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
