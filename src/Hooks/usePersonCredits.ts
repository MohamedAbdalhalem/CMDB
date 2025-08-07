import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { movieType } from "../Types/MovieType";
import { tvType } from "../Types/TvTypes";


export default function usePersonCredits(personId: string) {
    const [movieOrTv,setMovieOrTv] = useState('movie_credits')
    function getCredits() {
      return axios.get<{cast : (movieType & tvType)[],crew:(movieType & tvType)[]}>(`https://api.themoviedb.org/3/person/${personId}/${movieOrTv}?language=en-US`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getCredits', personId,movieOrTv],
        queryFn: getCredits
    })
    const cast = data?.data.cast
    const crew = data?.data.crew
    return {cast,crew,isLoading,setMovieOrTv}
}
