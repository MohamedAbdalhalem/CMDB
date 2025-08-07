import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { seasonDetialsType } from "../Types/SeasonDetialsType"
export default function useSeasonDetials(tvShowId:string,seasonNumber:string) {
  function getSeasonDetials() {
      return axios.get<seasonDetialsType>(`https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonNumber}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getSeasonDetials', tvShowId, seasonNumber],
        queryFn:getSeasonDetials
    })
    const seasonDetials = data?.data
    return{seasonDetials,isLoading}
}
