export type seasonDetialsType = {
    poster_path: string,
    overview: string,
    vote_average: number,
    air_date: string
    episodes: episodeData[]
}
export type episodeData = {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    runtime: number,
    still_path: string,
    vote_average: number,
}