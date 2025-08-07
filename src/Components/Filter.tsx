import {  useEffect, useState } from 'react';
import { genreType } from '../Types/GenerType';


export default function Filter({ filter,genres,isMovies }: { filter : (newGenre : string,newVoteAverage :string,newSortBy :string) => void, genres:  genreType[] | undefined,isMovies : boolean}) {
  const [open, setOpen] = useState(false);
  const [tempGenre, setTempGenre] = useState('') 
  const [tempVoteAverage,setTempVoteAverage] = useState('')
  const [tempSortBy,setTempSortBy] = useState('popularity.desc')
  function apply() {
    filter(tempGenre,tempVoteAverage,tempSortBy)
    setOpen(false);
  }
  useEffect(() => {
    const storedMovieGenre = sessionStorage.getItem('allMoviesGenre');
    const storedMovieVoteAverage = sessionStorage.getItem('allMoviesVoteAverage');
    const storedMoviesSortBy = sessionStorage.getItem('allMoviesSortBy');
    const storedTvShowsGenre = sessionStorage.getItem('TvShowsGenre');
    const storedTvShowsVoteAverage = sessionStorage.getItem('TvShowsVoteAverage');
    const storedTvShowsSortBy = sessionStorage.getItem('TvShowsSortBy');
    if (storedMovieGenre) {
      setTempGenre(storedMovieGenre)
    }
    if (storedMovieVoteAverage) {
      setTempVoteAverage(storedMovieVoteAverage)
    }
    if (storedMoviesSortBy) {
      setTempSortBy(storedMoviesSortBy)
    }
    if (storedTvShowsGenre) {
      setTempGenre(storedTvShowsGenre)
    }
    if (storedTvShowsVoteAverage) {
      setTempVoteAverage(storedTvShowsVoteAverage)
    }
    if (storedTvShowsSortBy) {
      setTempSortBy(storedTvShowsSortBy)
    }
  },[])
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Filter
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center filter">
          <div className="bg-white  dark:bg-gray-800 dark:text-white rounded-lg shadow-lg w-full max-w-sm p-5">
            <h2 className="text-lg font-semibold mb-4">Sort by</h2>
            {isMovies ?  <select
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={tempSortBy}
              onChange={(e) => {setTempSortBy(e.target.value)}}
            >

              <option className="text-gray-900" value="popularity.asc">popularity_asc</option>
              <option className="text-gray-900" value="popularity.desc">popularity_desc</option>
              <option className="text-gray-900" value="title.asc">title_AZ</option>
              <option  className="text-gray-900" value="title.desc">title_ZA</option>
              <option className="text-gray-900" value="primary_release_date.asc">release_date_asc</option>
              <option className="text-gray-900" value="primary_release_date.desc">release_date_desc</option>
            </select>: <select
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={tempSortBy}
              onChange={(e) => {setTempSortBy(e.target.value)}}
            >
              <option className="text-gray-900" value="popularity.asc">popularity_asc</option>
              <option className="text-gray-900" value="popularity.desc">popularity_desc</option>
              <option className="text-gray-900" value="name.asc">name_AZ</option>
              <option className="text-gray-900" value="name.desc">name_ZA</option>
              <option className="text-gray-900" value="first_air_date.asc">first_air_date_asc</option>
              <option className="text-gray-900" value="first_air_date.desc">first_air_date_desc</option>
            </select>}
            <h2 className="text-lg font-semibold mb-4">Choose a Genre</h2>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={tempGenre}
              onChange={(e) => {setTempGenre(e.target.value)}}
            >
              <option value="">Select a Genre</option>
              {genres?.map((genre) => (
                <option className="text-gray-900" key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
            <h2 className="text-lg font-semibold mb-4">Choose a vote average</h2>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
              value={tempVoteAverage}
              onChange={(e) => {setTempVoteAverage(e.target.value)}}
            >
              <option className="text-gray-900" value="">Select a VoteAverage</option>
              <option className="text-gray-900" value="3">More than 3</option>
              <option className="text-gray-900" value="5">More than 5</option>
              <option className="text-gray-900" value="7">More than 7</option>
              <option className="text-gray-900" value="9">More than 9</option>
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={apply}
                className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
