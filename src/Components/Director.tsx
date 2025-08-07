import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Director({id} : {id : string | undefined}) {
    function getDirector() {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getDirector', id],
    queryFn: getDirector
  })
    if (isLoading) {
        return <div className="h-5 bg-gray-300 dark:bg-gray-600 w-20 rounded"></div>
    }
  return (
      <p className="text-white font-bold">{data?.data.crew[0].name }</p>
  )
}
