export const sum = (prev: number, current: number) => prev + current;
export const addZore = (n: number) => {
    return n > 9 ? n : `0${n}`;
};
