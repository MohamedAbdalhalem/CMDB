import axios from 'axios'
import { trailerType } from '../Types/TrailerType'
import { useQuery } from '@tanstack/react-query'

export default function useTrailer(ismovie : boolean,id: string) {
    const movieLink = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    const tvShowLink = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
 function movieTrailer() {
     return axios.get<{ results: trailerType[] }>(
         ismovie ? movieLink : tvShowLink
         , {
         headers: {
           accept: 'application/json',
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
        }
      })
   }
   const {data} = useQuery({
     queryKey: ['movieTrailer', id],
     queryFn: movieTrailer
   })
    const trailer = data?.data.results.filter((ele) => ele.type === 'Trailer')
    return trailer
}
