import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { movieType } from "../Types/MovieType"
import { tvType } from "../Types/TvTypes"
import { peopleType } from "../Types/PeopleType"
import { useQuery } from "@tanstack/react-query"


export default function useSearchResults() {
  const [page,setPage] = useState(1)
  const { type, q } = useParams()
  let typeSearch = ''
  if (type === 'movies') {
    typeSearch = 'movie'
  } else if (type === 'tvShows') {
    typeSearch= 'tv'
  } else {
    typeSearch ='person'
  }
  function getSearchResults() {
    return axios.get<{results : (movieType & tvType & peopleType) [],total_pages : number}>(`https://api.themoviedb.org/3/search/${typeSearch}?query=${q}&include_adult=false&language=en-US&page=${page}`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  function handlePageChange({ selected }: { selected: number }) {
    setPage(selected + 1)
    sessionStorage.setItem('searchResultsPage',String(selected +1))
  }
  const {data,isLoading} = useQuery({
    queryKey: [`getSearchResults`,type,q,page],
    queryFn:getSearchResults
  })
  useEffect(() => {
    const storedSearchResultsPage = sessionStorage.getItem('searchResultsPage')
    if (storedSearchResultsPage) {
      setPage(+storedSearchResultsPage)
    }
    return () => {
      if (!location.pathname.startsWith('/searchResults')) {
        sessionStorage.removeItem('searchResultsPage')
      }
    }
  })
  const results =data?.data.results
  const numOfPages = data?.data.total_pages
  return{results,numOfPages,isLoading,handlePageChange,typeSearch,page,type}  
}
