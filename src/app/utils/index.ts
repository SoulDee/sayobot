export * from './convert.utils';
export * from './svgIcon.utils';
export * from './download.utils';
export * from './math.utils';

// 序列化请求参数
export const formatParm = (result: { [key: string]: any }) => {
    return Object.keys(result)
        .map((key) => `${key}=${result[key]}`)
        .join('&');
};
