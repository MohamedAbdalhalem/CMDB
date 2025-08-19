import { movieType } from "../Types/MovieType"
import { peopleType } from "../Types/PeopleType"
import { tvType } from "../Types/TvTypes"
import notFoundImg from '../assets/No_Image_Available.jpg'
import { Link } from 'react-router';
import { scrollTOTop } from "../utilities";
export default function Card({ type,movieData ,tvShowData ,personData }
    : {
        type: 'movie' | "tv" | "person",
        movieData?: movieType,
        tvShowData?: tvType,
        personData?: peopleType,
  }) {
  const getRatingColor = (rating : number) => {
    if (rating >= 7) return "text-green-500";
    if (rating >= 4) return "text-yellow-500";
    return "text-red-500";
  };
    let pathName = ''
    if (type === "movie") {
        pathName = `/Movies/${movieData?.id}/overview`
    } else if (type === "tv") {
        pathName = `/tvShows/${tvShowData?.id}/overview`
    } else {
        pathName = `/People/${personData?.id}`
    }
  return (
    <Link
      onClick={scrollTOTop}
      to={pathName}
      className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700">
      {/* movie img */}
      {type === "movie" && <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
        <img
            src={movieData?.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}` : notFoundImg}
            alt={movieData?.title}
            className="w-full h-full object-fill"
          />
      </div>}  
      {/* tvShow img  */}
      {type === "tv" && <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
        <img
            src={tvShowData?.backdrop_path ? `https://image.tmdb.org/t/p/w500${tvShowData.backdrop_path}` : notFoundImg}
            alt={tvShowData?.name}
            className="w-full h-full object-fill"
          />
      </div>}
      {/* person img */}
      {type === 'person' && <img
          src={personData?.profile_path ? `https://image.tmdb.org/t/p/w500${personData.profile_path}` : notFoundImg}
          alt={personData?.name}
          className="w-full h-80 object-cover"
      />}
      {/* movie data */}
      {type === "movie" && <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                {movieData?.title}
              </h3>
      
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                 <span className={`font-semibold flex items-center gap-1 ${getRatingColor(movieData!.vote_average)}`}>
                  ⭐ {movieData?.vote_average}
                </span>
                <span>{movieData?.release_date}</span>
              </div>
      </div>}
      {/* tvshow data */}
      {type === "tv" && <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {tvShowData?.name}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
           <span className={`font-semibold flex items-center gap-1 ${getRatingColor(tvShowData!.vote_average)}`}>
            ⭐ {tvShowData?.vote_average.toFixed(1)}
          </span>
          <span>{tvShowData?.first_air_date}</span>
        </div>
      </div>}
      {/* person data */}
      {type === "person" && <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {personData?.name}
        </h2>

        {personData!.known_for.length > 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-gray-700 dark:text-gray-400">Known for:</span>{" "}
            {personData?.known_for.map((work, index) => (
              <span key={work.id}>
                <Link
                  to={work.title ? `/movies/${work.id}/overview` : `/tvShows/${work.id}/overview`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {work.title || work.name}
                </Link>
                {index < personData.known_for.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
      </div>}
    </Link>
  )
}
