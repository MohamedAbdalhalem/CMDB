import { Link } from 'react-router'
import { movieType } from '../Types/MovieType'

export default function SliderItem3({movieData} : {movieData : movieType}) {
  return (
  <Link to={`/movies/${movieData.id}/overview`} className="relative block  h-full mb-2  rounded-2xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w500_and_h282_face/${movieData.poster_path}`} 
        alt={movieData.title}
        className="h-64 w-full object-cover"
      />
    </div>

    <div className="pt-4 pb-4 px-3 ">
      <h3 className="text-lg font-bold leading-tight text-black dark:text-white mb-1">
        {movieData.title}
      </h3>

      <p className="text-sm text-black mb-1 dark:text-white overflow-hidden text-ellipsis">
        {movieData.overview}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
        {movieData.release_date}
      </p>
    </div>
  </Link>

  )
}
