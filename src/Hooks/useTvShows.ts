import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { tvType } from '../Types/TvTypes';

export default function useTvShows() {
    const [page, setPage] = useState(1)
    const [genre, setGenreState] = useState('')
    const [voteAverage, setVoteAverage] = useState('')
    const [sortBy,setSortBy] = useState('popularity.desc')
    function filter(newGenre: string,newVoteAverage :string,newSortBy :string) {
        sessionStorage.setItem('TvShowsGenre', newGenre);
        sessionStorage.setItem('TvShowsVoteAverage', newVoteAverage);
        sessionStorage.setItem('TvShowsSortBy', newSortBy);
        setGenreState(newGenre);
        setVoteAverage(newVoteAverage)
        setSortBy(newSortBy)
    }
    function getTvShows() {
        return axios.get<{ results: tvType[] | undefined, total_pages: number }>(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=${sortBy}&vote_average.gte=${voteAverage}&with_genres=${genre}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDRiZjJiMmIyNTM2Y2Y4MWI4MTUwN2U4YmRmZTM0ZSIsIm5iZiI6MTc1MTk5ODI2NS41NCwic3ViIjoiNjg2ZDVmMzk2ZGRlYTcxNjE2NTFlNjExIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VDWeBtvvDyzpkSqY6Hv5fUjHU6TxMfkaNqvhl_K3QJE',
                accept: 'application/json'
            }
        })
    }
    function handlePageChange({ selected }: { selected: number }) {
        sessionStorage.setItem('TvShowsPage', String(selected + 1))
        setPage(selected + 1)
    }
    useEffect(() => {
        const storedPage = sessionStorage.getItem('TvShowsPage');
        const storedGenre = sessionStorage.getItem('TvShowsGenre');
        const storedVoteAverage = sessionStorage.getItem('TvShowsVoteAverage');
        const storedSortBy = sessionStorage.getItem('TvShowsSortBy');
        if (storedPage) {
            setPage(+storedPage);
        }
        if (storedGenre) {
            setGenreState(storedGenre);
        } 
        if (storedVoteAverage) {
            setVoteAverage(storedVoteAverage)
        }
        if (storedSortBy) {
            setSortBy(storedSortBy)
        }
        return () => {
            if (!location.pathname.startsWith('/tvShows') && !location.pathname.startsWith('/tvShowsDetials')) {
                sessionStorage.removeItem('TvShowsPage');
                sessionStorage.removeItem('TvShowsGenre');
                sessionStorage.removeItem('TvShowsVoteAverage');
                sessionStorage.removeItem('TvShowsSortBy');
            }
        }
    }, [location.pathname]);
    const { data, isLoading } = useQuery({
        queryKey: ['getTvShows', page, genre,voteAverage,sortBy],
        queryFn: getTvShows
    })
    const results = data?.data.results
    const numOfPages = data?.data.total_pages! < 500 ? data?.data.total_pages : 500
    return { page, handlePageChange, isLoading, results, numOfPages, filter }
}
