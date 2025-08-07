import { Link, useParams } from "react-router";
import { episodeData } from "../Types/SeasonDetialsType";
import notFoundImg from '../assets/No_Image_Available.jpg'
export default function EpisodeCard({ episodeData }: { episodeData: episodeData }) {
  const { tvShowId, tvShowName, seasonNumber } = useParams()
  return (
    <Link to={`/tvShows/${tvShowId}/${tvShowName}/season/${seasonNumber}/episode/${episodeData.episode_number}`} className="w-full block bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700">
  <img
    src={episodeData.still_path ? `https://image.tmdb.org/t/p/w500/${episodeData.still_path}` :notFoundImg}
    alt={episodeData.name}
    className="w-full h-52 object-cover"
  />

  <div className="p-4 space-y-2">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      {episodeData.episode_number}. {episodeData.name}
    </h2>

    <p className="text-sm text-gray-600 dark:text-gray-300">
      Air Date: {episodeData.air_date}
    </p>

    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
      <span className="bg-yellow-500 text-black px-2 py-0.5 rounded font-semibold">
        ★ {episodeData.vote_average?.toFixed(1) || "N/A"}
      </span>
      <span>Runtime: {episodeData.runtime} min</span>
    </div>
  </div>
</Link>

  )
}
