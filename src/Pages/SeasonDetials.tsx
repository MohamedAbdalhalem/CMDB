import { useParams } from "react-router"
import useSeasonDetials from "../Hooks/useSeasonDetials"
import MovieDetialsLoadingScreen from "../Components/MovieDetialsLoadingScreen"
import EpisodeCard from "../Components/EpisodeCard"

export default function SeasonDetials() {
    const { tvShowId, tvShowName, seasonNumber } = useParams()
    const {seasonDetials,isLoading} = useSeasonDetials(tvShowId!,seasonNumber!)
  if (isLoading) {
      return <MovieDetialsLoadingScreen/>
    }
  return (
    <div className=" pb-5 pt-15">
      <div
  className="relative bg-center mb-4 px-5 min-h-[400px] flex items-center"
  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${seasonDetials?.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'100%'
  }}
>
  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-0"></div>
  <div className="relative z-10 max-w-4xl text-white space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold">
      {tvShowName}
      <span className="text-gray-400 ml-2 font-medium text-2xl">
        (Season {seasonNumber})
      </span>
    </h1>

    <p className="text-sm sm:text-base text-gray-300 line-clamp-4">
      {seasonDetials?.overview || "No overview available."}
    </p>

    <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-200">
      <span className="bg-yellow-500 text-black px-2 py-1 rounded">
        ★ {seasonDetials?.vote_average?.toFixed(1) || "N/A"}
      </span>
      <span className="text-gray-400">
        Air Date: {seasonDetials?.air_date || "Unknown"}
      </span>
    </div>
  </div>
</div>
      <div className="px-5">
        <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-4">
          Episodes
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {seasonDetials?.episodes.map(episode => <EpisodeCard
            key={episode.id} episodeData={episode} />)}
        </div>
     </div>
    </div>
  )
}
