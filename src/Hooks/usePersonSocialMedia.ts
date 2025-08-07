import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { socialMediaType } from "../Types/SocialMediaType";
export default function usePersonSocialMedia(personId : string) {
    function getSocialMedia() {
      return axios.get<socialMediaType>(`https://api.themoviedb.org/3/person/${personId}/external_ids`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getSocialMedia', personId],
        queryFn: getSocialMedia
    })
    const socialMedia = data?.data
    return {socialMedia,isLoading}
}
