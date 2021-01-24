import { CategoryOptions, RangeSlider } from '@app/types';

export const SEARCH_RANGE_OPTIONS: RangeSlider[] = [
    {
        title: 'Stars',
        key: 'stars',
        minDef: 0,
        maxDef: 10,
    },
    {
        title: 'AR',
        key: 'ar',
        minDef: 0,
        maxDef: 10,
    },
    {
        title: 'OD',
        key: 'od',
        minDef: 0,
        maxDef: 10,
    },
    {
        title: 'CS',
        key: 'cs',
        minDef: 0,
        maxDef: 10,
    },
    {
        title: 'HP',
        key: 'hp',
        minDef: 0,
        maxDef: 10,
    },
    {
        title: 'BPM',
        key: 'bpm',
        minDef: 0,
        maxDef: 1000,
    },
    {
        title: 'Length',
        key: 'length',
        minDef: 0,
        maxDef: 1000,
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

export const GENRE_META_OPTIONS = {
    0: 'any',
    1: 'unspecified',
    2: 'video game',
    3: 'anime',
    4: 'rock',
    5: 'pop',
    6: 'other',
    7: 'novelty',
    9: 'hip hop',
    10: 'electronic',
};

export const LANGUAGE_META_OPTIONS = {
    0: 'any',
    1: 'other',
    2: 'english',
    3: 'japanese',
    4: 'chinese',
    5: 'instrumental',
    6: 'korean',
    7: 'french',
    8: 'german',
    9: 'swedish',
    10: 'spanish',
    11: 'italian',
};

export const MODE_META_OPTIONS = {
    0: 'O',
    1: 'T',
    2: 'C',
    3: 'M',
};
