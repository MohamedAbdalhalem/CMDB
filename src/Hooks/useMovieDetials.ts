import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { movieDetialsType } from "../Types/MovieDetials";


export default function useMovieDetials(id: string | undefined) {
  function getMovieDetials() {
    return axios.get<movieDetialsType>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getMovieDetials', id],
    queryFn: getMovieDetials
  })
  function getTime(runtime : string | undefined) {
    const hours = Math.floor(Number(runtime) / 60);
    const minutes = Number(runtime) % 60;
    const formatted = `${hours}h ${minutes !=0 ? minutes+'m' : ''}`;
    return formatted
  }
    const details = data?.data
    return {isLoading,details,getTime}
}
