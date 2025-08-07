import { Button } from "flowbite-react";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function SearchSection() {
  const selectRef = useRef<HTMLSelectElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  function a() {
    let type = selectRef.current?.value
    let q = inputRef.current?.value
    if (q === '') {
      q=" "
    }
    navigate(`/searchResults/${type}/${q}`)
  } 
  return (
    <section
  className="min-h-[50vh] bg-cover bg-center flex-col flex justify-center px-5"
>
  <h2 className="text-5xl font-extrabold text-white mb-3">Welcome</h2>
  <h3 className="text-3xl font-bold text-white mb-8">
    Millions of movies, TV shows and people to discover. Explore now.
  </h3> 
  <div className="flex flex-col sm:flex-row w-full mb-4 bg-white rounded-2xl shadow-md overflow-hidden">
        <select
          ref={selectRef}
      className="sm:w-48 w-full px-4 py-4 border-b md:border-r border-gray-300 text-gray-700 focus:outline-none"
      defaultValue="all"
    >
      <option value="movies">Movies</option>
      <option value="tvShows">TV Shows</option>
      <option value="people">People</option>
    </select>

        <input
          ref={inputRef}
      type="text"
      placeholder="Search for a movie, tv show, person......"
          className="w-full px-6 py-4 text-gray-800 focus:outline-none"
          required
    />

        <Button
          onClick={a}
      type="submit"
      className="sm:rounded-none sm:rounded-r-2xl rounded-b-2xl bg-gradient-to-r from-blue-600 py-8 font-bold cursor-pointer to-blue-800 sm:mt-0 mt-2 sm:ml-0 text-white px-6"
    >
      Search
    </Button>
  </div>
</section>

  )
}
