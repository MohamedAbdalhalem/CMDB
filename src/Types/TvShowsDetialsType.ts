export type tvShowDetialsType = {
    backdrop_path: string,
    first_air_date: string,
    last_air_date: string,
    overview:string,
    genres: gener[],
    id: number,
    name: string,
    number_of_episodes: number,
    number_of_seasons: number,
    poster_path: string,
    seasons: season[],
    vote_average: number,
    tagline:string
}
type gener = {
    name: string,
    id:number
}
type season = {
    id: number,
    name: string,
    season_number:number
}