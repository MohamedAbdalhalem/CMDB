import { useQuery } from "@tanstack/react-query"
import { EpisodeDetialsType } from "../Types/EpisodeDetialsType"
import { useParams } from "react-router"
import axios from "axios"

export default function useEpisodeDetials() {
  const { tvShowId, tvShowName, seasonNumber, episodeNumber } = useParams()
    function getEpisodeDetials() {
      return axios.get<EpisodeDetialsType>(
        `https://api.themoviedb.org/3/tv/${tvShowId}/season/${seasonNumber}/episode/${episodeNumber}?language=en-US`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
       }
     })
    }
    const {data,isLoading} = useQuery({
      queryKey: ['getEpisodeDetials', tvShowId, seasonNumber, episodeNumber],
      queryFn: getEpisodeDetials
    })
    const episodeDetials = data?.data
    return {tvShowName,seasonNumber,episodeNumber,episodeDetials,isLoading}
}
