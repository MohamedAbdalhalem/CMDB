export type movieType = {
    title: string,
    backdrop_path: string | null,
    vote_average: number,
    release_date: string,
    id: number,
    poster_path: string,
    overview: string,
    media_type : 'tv' | 'movie'
}