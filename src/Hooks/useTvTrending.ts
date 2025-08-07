import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import { tvType } from "../Types/TvTypes"


export default function useTvTrending() {
const [isDay,setIsDay] = useState<"day" | "week">('day')
  async function getTvTrending() {
    return await axios.get<{ results: tvType[] | undefined }>(`https://api.themoviedb.org/3/trending/tv/${isDay}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  function filter(datOrWeek : "day" | "week") {
    setIsDay(datOrWeek)
    sessionStorage.setItem('isTvShowsDay',datOrWeek)
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getTvTrending',isDay],
    queryFn: getTvTrending
  })
  useEffect(() => {
      const storedIsTvShowsDay = sessionStorage.getItem('isTvShowsDay')
      if (storedIsTvShowsDay) {
        setIsDay(storedIsTvShowsDay as 'day' | 'week')
      }
      return () => {
        if (location.pathname !== '') {
          sessionStorage.removeItem("isTvShowsDay")
        }
      }
    },[])
  const resluts = data?.data.results  
  return {filter,isDay,resluts,isLoading}
}
