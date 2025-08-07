export type movieDetialsType = {
    title: string,
    backdrop_path: string,
    release_date: string,
    tagline: string,
    vote_average: number,
    overview: string,
    poster_path: string,
    runtime:string,
    genres: genere []
}
type genere = {
    name:string
}