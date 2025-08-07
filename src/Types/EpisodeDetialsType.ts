import { castAndCrewType } from "./CastAndCrewType"

export type EpisodeDetialsType = {
    name: string,
    overview: string,
    air_date: string,
    episode_number: number,
    runtime: number,
    season_number: number,
    still_path: string,
    vote_average: number,
    crew: castAndCrewType[],
    guest_stars: castAndCrewType[]
}