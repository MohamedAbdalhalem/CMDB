import useMovieDetials from '../Hooks/useMovieDetials'
import MovieDetialsLoadingScreen from './MovieDetialsLoadingScreen'
import Director from './Director'
import { useParams } from 'react-router'
import RecommendationMoviesSlider from './RecommendationMoviesSlider'
import notFoundImg from '../assets/No_Image_Available.jpg'
import MovieCastandCrewSlider from './MovieCastandCrewSlider'
export default function MovieOverview(){
  const { id } = useParams()
  const { details, getTime, isLoading } = useMovieDetials(id)
  if (isLoading) {
    <MovieDetialsLoadingScreen/> 
  }
  return (
    <div>
    <div
      className="relative bg-cover bg-center py-10 px-4 sm:px-10"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details?.poster_path})`
      }}
    >
      <div className="absolute  inset-0 bg-black/80 backdrop-blur-md z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
        <div className="rounded-xl h-full  overflow-hidden shadow-lg">
          <img
            src={details?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${details?.backdrop_path}` : notFoundImg}
            alt={details?.title}
            className="w-full h-full object-fill"
          />
        </div>

        <div className="md:col-span-3 py-4 space-y-5 text-white">
          <h2 className="text-3xl font-bold leading-tight">
            {details?.title}{" "}
            <span className="text-gray-400">({details?.release_date?.split("-")[0]})</span>
          </h2>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-300">
            <span>{details?.release_date}</span>
            <span>•</span>
            <span>{details?.genres.map((g) => g.name).join(", ")}</span>
            <span>•</span>
            <span>{getTime(details?.runtime)}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1A71E3] text-white flex items-center justify-center font-bold text-sm">
              {Number(details?.vote_average?.toFixed(1)) * 10 + "%"}
            </div>
            <span className="text-base font-semibold">User Score</span>
          </div>

          <p className="italic text-lg text-gray-300">{details?.tagline}</p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-200 leading-relaxed">{details?.overview}</p>
          </div>

                <div className="pt-2 mt-4 border-t border-gray-700">
                  <Director id={ id} />
            <p className="text-sm text-gray-400">Director, Screenplay</p>
          </div>
        </div>
      </div>
      </div>
      <div className='px-5'>
        <MovieCastandCrewSlider movieId={id!} />
        <RecommendationMoviesSlider movieId={id!}/>
      </div>
</div>
  )
}
