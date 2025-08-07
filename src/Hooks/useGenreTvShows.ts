import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { genreType } from "../Types/GenerType"

export default function useGenreTvShows() {
  function getGenresTvShows() {
    return axios.get<{genres : genreType[]}>('https://api.themoviedb.org/3/genre/tv/list?language=en', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
  }
  const {data} = useQuery({
    queryKey: ['getGenresTvShows'],
    queryFn: getGenresTvShows
  })
    return data?.data.genres
}

