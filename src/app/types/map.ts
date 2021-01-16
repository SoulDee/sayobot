/**
 * @description 铺面列表搜索参数
 */
export interface MapSearchListParams {
    limit: number; // 单页数量
    offset: number; // 第几页偏移量
    type: string; // 搜索类型
    keyword?: string; // 关键词
    subtype?: number; // 搜索子类型
    mode?: number; // OSU 模式
    class?: number; // 铺面状态
    genre?: number; // 铺面风格
    language?: number; // 语言
    stars?: number[]; // start 范围
    ar?: number[]; // ar 范围
    od?: number[]; // od 范围
    cs?: number[]; // cs 范围
    hp?: number[]; // hp 范围
    length?: number[]; // length 范围
    bpm?: number[]; // bpm 范围
}

export enum SearchType {
    Hot = 'hot',
    New = 'new',
    Packs = 'packs',
    Search = 'search',
}
