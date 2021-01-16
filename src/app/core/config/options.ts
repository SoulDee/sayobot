import { CategoryOptions, RangeSlider } from '@app/types';

export const SEARCH_RANGE_OPTIONS: RangeSlider[] = [
    {
        title: 'Stars',
        key: 'stars',
        min: 0,
        max: 1000,
    },
    {
        title: 'AR',
        key: 'ar',
        min: 0,
        max: 1000,
    },
    {
        title: 'OD',
        key: 'od',
        min: 0,
        max: 1000,
    },
    {
        title: 'CS',
        key: 'cs',
        min: 0,
        max: 1000,
    },
    {
        title: 'HP',
        key: 'hp',
        min: 0,
        max: 1000,
    },
    {
        title: 'Length',
        key: 'length',
        min: 0,
        max: 1000,
    },
    {
        title: 'BPM',
        key: 'bpm',
        min: 0,
        max: 1000,
    },
];

export const SEARCH_OPTIONS_CATEGORY: CategoryOptions[] = [
    {
        title: 'searchCtx.opts.mode',
        key: 'mode',
        options: [
            {
                title: 'searchCtx.opts.std',
                key: 1,
            },
            {
                title: 'searchCtx.opts.taiko',
                key: 2,
            },
            {
                title: 'searchCtx.opts.ctb',
                key: 4,
            },
            {
                title: 'searchCtx.opts.mania',
                key: 8,
            },
        ],
    },
    {
        title: 'searchCtx.opts.class',
        key: 'class',
        options: [
            {
                title: 'searchCtx.opts.rank',
                key: 1,
            },
            {
                title: 'searchCtx.opts.qualified',
                key: 2,
            },
            {
                title: 'searchCtx.opts.loved',
                key: 4,
            },
            {
                title: 'searchCtx.opts.pending',
                key: 8,
            },
            {
                title: 'searchCtx.opts.graveyard',
                key: 16,
            },
        ],
    },
    {
        title: 'searchCtx.opts.subtype',
        key: 'subtype',
        options: [
            {
                title: 'searchCtx.opts.title',
                key: 1,
            },
            {
                title: 'searchCtx.opts.artist',
                key: 2,
            },
            {
                title: 'searchCtx.opts.creator',
                key: 4,
            },
            {
                title: 'searchCtx.opts.difficulty',
                key: 8,
            },
            {
                title: 'searchCtx.opts.tag',
                key: 16,
            },
            {
                title: 'searchCtx.opts.source',
                key: 32,
            },
        ],
    },
    {
        title: 'searchCtx.opts.genre',
        key: 'genre',
        options: [
            {
                title: 'searchCtx.opts.any',
                key: 1,
            },
            {
                title: 'searchCtx.opts.unknow',
                key: 2,
            },
            {
                title: 'searchCtx.opts.game',
                key: 4,
            },
            {
                title: 'searchCtx.opts.animation',
                key: 8,
            },
            {
                title: 'searchCtx.opts.rockAndRoll',
                key: 16,
            },
            {
                title: 'searchCtx.opts.pop',
                key: 32,
            },
            {
                title: 'searchCtx.opts.other',
                key: 64,
            },
            {
                title: 'searchCtx.opts.novel',
                key: 128,
            },
            {
                title: 'searchCtx.opts.hipHop',
                key: 256,
            },
            {
                title: 'searchCtx.opts.electron',
                key: 1024,
            },
        ],
    },
    {
        title: 'searchCtx.opts.lang',
        key: 'language',
        options: [
            {
                title: 'searchCtx.opts.any',
                key: 1,
            },
            {
                title: 'searchCtx.opts.other',
                key: 2,
            },
            {
                title: 'searchCtx.opts.english',
                key: 4,
            },
            {
                title: 'searchCtx.opts.japanese',
                key: 8,
            },
            {
                title: 'searchCtx.opts.chinese',
                key: 16,
            },
            {
                title: 'searchCtx.opts.instrumental',
                key: 32,
            },
            {
                title: 'searchCtx.opts.korean',
                key: 64,
            },
            {
                title: 'searchCtx.opts.french',
                key: 128,
            },
            {
                title: 'searchCtx.opts.german',
                key: 256,
            },
            {
                title: 'searchCtx.opts.swedish',
                key: 512,
            },
            {
                title: 'searchCtx.opts.spanish',
                key: 1024,
            },
            {
                title: 'searchCtx.opts.italian',
                key: 2048,
            },
        ],
    },
];
