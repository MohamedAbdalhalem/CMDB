import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { tvType } from "../Types/TvTypes";
export default function useRecommendationTvShows(tvShowId : string) {
  function getRecommendationTvShows() {
        return axios.get<{results : tvType[]}>(`https://api.themoviedb.org/3/tv/${tvShowId}/recommendations?language=en-US&page=1`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: [`getRecommendationTvShows`, tvShowId],
        queryFn:getRecommendationTvShows
    })
    const results = data?.data.results
    return {results,isLoading}
}
