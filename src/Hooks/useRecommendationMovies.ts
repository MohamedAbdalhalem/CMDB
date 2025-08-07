import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { movieType } from "../Types/MovieType";
export default function useRecommendationMovies(movieId : string) {
  function getRecommendationMovies() {
        return axios.get<{results : movieType[]}>(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: [`getRecommendationMovies`, movieId],
        queryFn:getRecommendationMovies
    })
    const results = data?.data.results
    return {results,isLoading}
}
