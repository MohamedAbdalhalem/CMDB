import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { castAndCrewType } from "../Types/CastAndCrewType"
import { getArt, getCamera, getCostumeAndMake_Up, getCrew, getDirecting, getEditing, getProduction, getSound, getVisualEffects, getWriting } from "../utilities"

export default function useTvShowCastAndCrew(id : string | undefined) {
   function getTvShowCastAndCrew() {
        return axios.get<{cast : castAndCrewType[],crew: castAndCrewType[]}>(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
            {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getTvShowCastAndCrew', id],
      queryFn: getTvShowCastAndCrew,
    })
    const cast = data?.data.cast
    const crews = data?.data.crew
    const directing = getDirecting(crews)
    const Art = getArt(crews)
    const Sound = getSound(crews)
    const Writing = getWriting(crews)
    const Production = getProduction(crews)
    const Crew = getCrew(crews)
    const Camera = getCamera(crews)
    const CostumeAndMake_Up = getCostumeAndMake_Up(crews)
    const Editing = getEditing(crews)
    const VisualEffects = getVisualEffects(crews)
    return {cast,crews,isLoading,directing,Art,Sound,Writing,Production,Crew,Camera,CostumeAndMake_Up,Editing,VisualEffects}
}
