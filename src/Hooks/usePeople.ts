import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { peopleType } from '../Types/PeopleType';

export default function usePeople() {
  const [page, setPage] = useState(1)
    function getPeople() {
        return axios.get<{ results: peopleType[] | undefined }>(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('peoplePage',String(selected +1))
        setPage(selected + 1)
    }
    useEffect(() => {
        const storedPage = sessionStorage.getItem('peoplePage');
        if (storedPage) {
            setPage(+storedPage);
        }

        return () => {
            if (!location.pathname.startsWith('/People')) {
                sessionStorage.removeItem('peoplePage');
            }
        }
    }, [location.pathname]);
    const {data,isLoading}= useQuery({
        queryKey: ['getPeople', page],
        queryFn:getPeople
    })
    const results = data?.data.results
    return {page,handlePageChange,isLoading,results}
}
