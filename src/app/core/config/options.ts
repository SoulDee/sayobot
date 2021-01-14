import { CategoryOptions } from '@app/types';

export const SEARCH_OPTIONS_CATEGORY: CategoryOptions[] = [
    {
        title: '模式',
        key: 'M',
        options: [
            {
                title: 'STD',
                key: 1,
            },
            {
                title: 'Taiko',
                key: 2,
            },
            {
                title: 'CTB',
                key: 4,
            },
            {
                title: 'Mania',
                key: 8,
            },
        ],
    },
    {
        title: '状态',
        key: 'C',
        options: [
            {
                title: 'Ranked & Approved',
                key: 1,
            },
            {
                title: 'Qualified',
                key: 2,
            },
            {
                title: 'Loved',
                key: 4,
            },
            {
                title: 'Pending & WIP',
                key: 8,
            },
            {
                title: 'Graveyard',
                key: 16,
            },
        ],
    },
    {
        title: '范围',
        key: 'S',
        options: [
            {
                title: '标题',
                key: 1,
            },
            {
                title: '艺术家',
                key: 2,
            },
            {
                title: '作图者',
                key: 4,
            },
            {
                title: '难度',
                key: 8,
            },
            {
                title: '标签',
                key: 16,
            },
            {
                title: '提供方',
                key: 32,
            },
        ],
    },
    {
        title: '分类',
        key: 'G',
        options: [
            {
                title: 'any',
                key: 1,
            },
            {
                title: '尚未指定',
                key: 2,
            },
            {
                title: '电子游戏',
                key: 4,
            },
            {
                title: '动漫',
                key: 8,
            },
            {
                title: '摇滚',
                key: 16,
            },
            {
                title: '流行乐',
                key: 32,
            },
            {
                title: '其他',
                key: 64,
            },
            {
                title: '新奇',
                key: 128,
            },
            {
                title: '嘻哈',
                key: 256,
            },
            {
                title: '电子',
                key: 1024,
            },
        ],
    },
    {
        title: '语言',
        key: 'E',
        options: [
            {
                title: 'any',
                key: 1,
            },
            {
                title: '其他',
                key: 2,
            },
            {
                title: '英语',
                key: 4,
            },
            {
                title: '日语',
                key: 8,
            },
            {
                title: '中文',
                key: 16,
            },
            {
                title: '器乐',
                key: 32,
            },
            {
                title: '韩语',
                key: 64,
            },
            {
                title: '法语',
                key: 128,
            },
            {
                title: '德语',
                key: 256,
            },
            {
                title: '瑞典语',
                key: 512,
            },
            {
                title: '西班牙语',
                key: 1024,
            },
            {
                title: '意大利语',
                key: 2048,
            },
        ],
    },
];
