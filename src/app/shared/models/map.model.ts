/**
 * ==============================================================
 * 铺面集合详情
 * ==============================================================
 * @param status 状态
 * @param sid 谱面集合id
 * @param local_update 最后检查更新时间
 * @param bids_amount 此谱面集合中的谱面数量
 * @param approved rank状态
 * @param title 标题
 * @param artist 艺术家
 * @param titleU 标题 Unicode
 * @param artistU 艺术家 Unicode
 * @param creator 作图者
 * @param creator_id 作图者的id
 * @param source 提供方/专辑/……
 * @param last_update 谱面最后更新时间
 * @param approved_date Ranked 时间
 * @param bpm bpm
 * @param favourite_count 收藏数
 * @param video 是否有视频
 * @param storyboard 是否有storyboard
 * @param preview 是否有预览
 * @param tags 标签字符串
 * @param language 语言
 * @param genre 风格
 * @param bid_data 难度详情列表
 */
export interface MapInfoResult {
    status: number;
    data: MapSidDetail;
}

/**
 * ==============================================================
 * 铺面集合详情
 * ==============================================================
 * @param status 状态
 * @param sid 谱面集合id
 * @param local_update 最后检查更新时间
 * @param bids_amount 此谱面集合中的谱面数量
 * @param approved rank状态
 * @param title 标题
 * @param artist 艺术家
 * @param titleU 标题 Unicode
 * @param artistU 艺术家 Unicode
 * @param creator 作图者
 * @param creator_id 作图者的id
 * @param source 提供方/专辑/……
 * @param last_update 谱面最后更新时间
 * @param approved_date Ranked 时间
 * @param bpm bpm
 * @param favourite_count 收藏数
 * @param video 是否有视频
 * @param storyboard 是否有storyboard
 * @param preview 是否有预览
 * @param tags 标签字符串
 * @param language 语言
 * @param genre 风格
 * @param bid_data 难度详情列表
 * @example {
 *  sid: 163112
 *  local_update: 1580646455
 *  bids_amount: 3
 *  approved: 1
 *  title: "My Love"
 *  artist: "Kuba Oms"
 *  titleU: "My Love"
 *  artistU: "Kuba Oms"
 *  creator: "W h i t e"
 *  creator_id: 685229
 *  source: "ADHD"
 *  last_update: 1398656967
 *  approved_date: 1399262550
 *  bpm: 128
 *  favourite_count: 16536
 *  video: 0
 *  storyboard: 0
 *  preview: 0
 *  tags: "monthly beatmapping contest electronic folk pop w_h_i_t_e"
 *  language: 2
 *  genre: 5
 *  bid_data: [ MapBidDetail list ]
 * }
 */
export interface MapSidDetail {
    sid: number;
    local_update: number;
    bids_amount: number;
    approved: number;
    title: string;
    artist: string;
    titleU: string;
    artistU: string;
    creator: string;
    creator_id: number;
    source: string;
    last_update: number;
    approved_date: number;
    bpm: number;
    favourite_count: number;
    video: number;
    storyboard: number;
    preview: number;
    tags: string;
    language: number;
    genre: number;
    bid_data: MapBidDetail[];
}

/**
 * ==============================================================
 * 铺面难度详情
 * ==============================================================
 * @param bid 唯一 id
 * @param mode 模式标识数字
 * @param version 版本
 * @param length 长度
 * @param CS 缩圈大小
 * @param AR 缩圈速度
 * @param OD 缩圈准度
 * @param HP 生命难度
 * @param star 总体难度
 * @param aim 移动难度
 * @param speed 手速难度
 * @param hit300windows 在这个时间内（ms）可以打出300分数
 * @param pp 该谱面的最大 pp
 * @param pp_aim 该谱面的移动 pp
 * @param pp_speed 该铺面的手速 pp
 * @param pp_acc 该铺面的acc PP
 * @param circles 泡泡数量
 * @param sliders 滑条数量
 * @param spinners 转盘数量
 * @param maxcombo 最大连击
 * @param playcount 被推的次数
 * @param passcount 被推倒的次数
 * @param strain_aim 移动难度曲线
 * @param strain_speed 手速难度曲线
 * @param img 背景图的MD5
 * @example {
 *  "bid": 2115020,
 *  "mode": 1,
 *  "version": "Cygnet",
 *  "length": "129",
 *  "CS": 2,
 *  "AR": 10,
 *  "OD": 6.5,
 *  "HP": 5.5,
 *  "star": 5.63524,
 *  "aim": 0,
 *  "speed": 0,
 *  "hit300windows": 0,
 *  "pp": 0,
 *  "pp_aim": 0,
 *  "pp_speed": 0,
 *  "pp_acc": 0,
 *  "circles": 0,
 *  "sliders": 0,
 *  "spinners": 0,
 *  "maxcombo": 0,
 *  "playcount": 153,
 *  "passcount": 45,
 *  "strain_aim": "233255123333243433344523435534344223233323441111111",
 *  "strain_speed": "143143133334244533444422334553333123234222441111111",
 *  "img": "e62388e1cd408d2d4bbe0a6437fbb266"
 * }
 */
export interface MapBidDetail {
    audio: string;
    bid: number;
    mode: number;
    version: string;
    length: string;
    CS: number;
    AR: number;
    OD: number;
    HP: number;
    star: number;
    aim: number;
    speed: number;
    hit300windows: number;
    pp: number;
    pp_aim: number;
    pp_speed: number;
    pp_acc: number;
    circles: number;
    sliders: number;
    spinners: number;
    maxcombo: number;
    playcount: number;
    passcount: number;
    strain_aim: string;
    strain_speed: string;
    img: string;
}

/**
 * ==============================================================
 * 预览图
 * ==============================================================
 * @param approved 已承认
 * @param artist 作者名
 * @param artistU 作者英文名
 * @param creator 创作者
 * @param favourite_count 点赞数
 * @param play_count 被游玩的次数
 * @param lastupdate 最后更新时间
 * @param modes 模式
 * @param order 排序
 * @param sid sid
 * @param title 标题
 * @param titleU 英文标题
 * @example {
 *   sid: 320118
 *   modes: 1
 *   approved: 1
 *   lastupdate: 1449873487
 *   title: "No title"
 *   artist: "Reol"
 *   titleU: "No title"
 *   artistU: "Reol"
 *   creator: "VINXIS"
 *   favourite_count: 10759
 *   order: 57614501
 * }
 */
export interface PreMap {
    approved: number;
    artist: string;
    artistU: string;
    creator: string;
    favourite_count: number;
    play_count: number;
    lastupdate: number;
    modes: number;
    order: number;
    sid: number;
    title: string;
    titleU: string;
}

/**
 * ==============================================================
 * 搜索铺面列表结果
 * ==============================================================
 * @param status 状态;
 * @param endid 下一页的偏移值;
 * @param time_cost 耗时
 * @param results 结果总量
 * @param match_title_results 匹配标题
 * @param match_artist_results 匹配歌手
 * @param match_creator_results 匹配创作者
 * @param match_version_results 匹配难度
 * @param match_tags_results 匹配标签
 */
export interface SearchMapResult {
    status: number;
    endid: number;
    time_cost?: number;
    results?: number;
    match_title_results?: number;
    match_artist_results?: number;
    match_creator_results?: number;
    match_version_results?: number;
    match_tags_results: number;
    data: PreMap[];
}

/**
 * 铺面当前的收录状态
 */
export enum Approved {
    graveyard = -2,
    WIP = -1,
    pending = 0,
    ranked = 1,
    approved = 2,
    qualified = 3,
    loved = 4,
}
