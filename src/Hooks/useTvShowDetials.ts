import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { tvShowDetialsType } from "../Types/TvShowsDetialsType";


export default function useTvShowDetials(id: string | undefined) {
  function getTvShowDetials() {
    return axios.get<tvShowDetialsType>(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getTvShowDetials', id],
    queryFn: getTvShowDetials
  })
  
    const tvShowsdetails = data?.data
    return {isLoading,tvShowsdetails}
}
