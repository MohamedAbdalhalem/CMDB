
import { Link } from "react-router";
import { tvType } from "../Types/TvTypes";

export default function SliderItem2({tvData} : {tvData : tvType}) {
  return (
      <Link to={`/tvShows/${tvData.id}/overview`} className={`relative block  h-full mb-2  rounded-2xl bg-white dark:bg-gray-900 shadow-lg overflow-hidden`}>
  <div className="relative">
    <img
      src={`https://image.tmdb.org/t/p/w500_and_h282_face/${tvData.backdrop_path}`} 
      alt={tvData.name}
      className="h-64 w-full object-cover"
    />

    <div className="absolute -bottom-4 left-2 w-fit bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md p-2 font-bold flex justify-center items-center">
      {Number(tvData.vote_average.toFixed(1)) * 10 + '%'}
    </div>
  </div>

  <div className="pt-6 pb-4 px-3">
    <h3 className="text-sm font-bold leading-tight text-black dark:text-white">
      {tvData.name}
    </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                      {tvData.first_air_date}
    </p>
  </div>
</Link>
  )
}
