import axios from "axios"
import { peopleDetialsType } from "../Types/PeopleDetialsType"
import { useQuery } from "@tanstack/react-query"
import { differenceInYears } from 'date-fns'

export default function usePersonDetials(personId: string) {
  const toDay = new Date()
  function getPersonDetials() {
    return axios.get< peopleDetialsType>(`https://api.themoviedb.org/3/person/${personId}?language=en-US`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getPersonDetials', personId],
    queryFn:getPersonDetials
  })
  
    const personDetials = data?.data
    const age = differenceInYears(toDay,personDetials?.birthday!)
    return {personDetials,isLoading,age}
}
