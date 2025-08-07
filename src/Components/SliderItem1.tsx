import { Link } from "react-router";
import { movieType } from "../Types/MovieType";

export default function SliderItem1({movieData} : {movieData : movieType}) {
  return (
          <Link to={`/movies/${movieData.id}/overview`} className="relative block h-full mb-2  rounded-2xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
  <div className="relative">
    <img
      src={`https://image.tmdb.org/t/p/w500_and_h282_face/${movieData.backdrop_path}`} 
      alt={movieData.title}
      className="h-64 w-full object-cover"
    />

    <div className="absolute -bottom-4 left-2 w-fit bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md p-2 font-bold flex justify-center items-center">
      {Number(movieData.vote_average.toFixed(1)) * 10 + '%'}
    </div>
  </div>

  <div className="pt-6 pb-4 px-3">
    <h3 className="text-sm font-bold leading-tight text-black dark:text-white">
      {movieData.title}
    </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                      {movieData.release_date}
    </p>
  </div>
</Link>

          
  )
}
