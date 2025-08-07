import axios from 'axios'
import { movieType } from '../Types/MovieType'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { datesType } from '../Types/DatesType'
export default function useUpcomingMovies() {
  const [page, setPage] = useState(1)
  async function getUpcomingMovies() {
    return await axios.get<{ results: movieType[] | undefined,total_pages : number, dates : datesType }>(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE'
     }
   })
  }
  function handlePageChange({ selected }: { selected: number }) {
          sessionStorage.setItem('upcomingMoviespage',String(selected +1))
          setPage(selected + 1)
      }
      useEffect(() => {
        const storedPage = sessionStorage.getItem('upcomingMoviespage');
        if (storedPage) {
            setPage(+storedPage);
        }

        return () => {
            if (!location.pathname.startsWith('/UpcomingMovies') && !location.pathname.startsWith('/movieDetials')) {
                sessionStorage.removeItem('upcomingMoviespage');
            }
        }
    }, [location.pathname]);
  const {data,isLoading} = useQuery({
    queryKey: ['getUpcomingMovies',page],
    queryFn: getUpcomingMovies
  })
 const resluts = data?.data.results
 const numOfPages = data?.data.total_pages
 const dates = data?.data.dates
  return {page,handlePageChange,isLoading,resluts,numOfPages,dates}
}
