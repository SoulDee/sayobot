export * from './search';
export * from './map';
export * from './function';

export interface IResponse<T> {
    data: T;
    status: number;
    time_cost?: number;
    endid?: number;
    match_artist_results?: number;
    match_creator_results?: number;
    match_tags_results?: number;
    match_title_results?: number;
    match_version_results?: number;
    results?: number;
}
