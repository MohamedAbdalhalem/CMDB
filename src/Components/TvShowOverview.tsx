import { Link, useParams } from "react-router"
import useTvShowDetials from "../Hooks/useTvShowDetials"
import MovieDetialsLoadingScreen from "./MovieDetialsLoadingScreen"
import notFoundImg from '../assets/No_Image_Available.jpg'
import TvShowCastandCrewSlider from "./TvShowCastandCrewSlider"
export default function TvShowOverview() {
  const { id } = useParams()
  const { tvShowsdetails,  isLoading } = useTvShowDetials(id)
  if (isLoading) {
      <MovieDetialsLoadingScreen/> 
    }
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-10 px-4 sm:px-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${tvShowsdetails?.poster_path})`
        }}
      >
        <div className="absolute  inset-0 bg-black/80 backdrop-blur-md z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
          <div className="rounded-xl h-full  overflow-hidden shadow-lg">
            <img
              src={tvShowsdetails?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${tvShowsdetails?.backdrop_path}` : notFoundImg}
              alt={tvShowsdetails?.name}
              className="w-full h-full object-fill"
            />
          </div>

          <div className="md:col-span-3 py-4 space-y-5 text-white">
            <h2 className="text-3xl font-bold leading-tight">
              {tvShowsdetails?.name}{" "}
              <span className="text-gray-400">({tvShowsdetails?.first_air_date?.split("-")[0] + "-" + tvShowsdetails?.last_air_date?.split("-")[0] })</span>
            </h2>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-300">
              <span>{tvShowsdetails?.first_air_date}</span>
              <span>•</span>
              <span>{tvShowsdetails?.genres.map((g) => g.name).join(", ")}</span>
              <span>•</span>
                <span>{ tvShowsdetails?.number_of_seasons} Seasons</span>
                <span>.</span>
                <span>{ tvShowsdetails?.number_of_episodes} Episodes</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1A71E3] text-white flex items-center justify-center font-bold text-sm">
                {Number(tvShowsdetails?.vote_average?.toFixed(1)) * 10 + "%"}
              </div>
              <span className="text-base font-semibold">User Score</span>
            </div>

            <p className="italic text-lg text-gray-300">{tvShowsdetails?.tagline}</p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-200 leading-relaxed">{tvShowsdetails?.overview}</p>
            </div>
          </div>
        </div>
        </div>
      <div className='px-5 my-4'>
        <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-4">Seasons </h3>
        <div className="grid grid-cols-2 md:grid-cols-7 lg:grid-cols-10 gap-3 mb-4">
          {tvShowsdetails?.seasons
  .filter(season => season.name !== 'Specials')
  .map(season => (
    <Link
      to={`/tvShows/${id}/${tvShowsdetails.name}/season/${season.season_number}`}
      key={season.id}
      className="bg-[#1A71E3] py-2 px-3 text-white font-bold text-base text-center shadow-lg rounded-lg"
    >
      {season.name}
    </Link>
  ))}
        </div>
        <TvShowCastandCrewSlider tvShowId={id!} />
      </div>
</div>
  )
}
