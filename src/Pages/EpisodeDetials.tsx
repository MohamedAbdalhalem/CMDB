import MovieDetialsLoadingScreen from "../Components/MovieDetialsLoadingScreen"
import notFoundImg from '../assets/No_Image_Available.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useEpisodeDetials from "../Hooks/useEpisodeDetials"
import { Link } from "react-router";
import { scrollTOTop } from "../utilities";
export default function EpisodeDetials() {
   const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5  
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3.5
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1.5
  }
  };
  const {tvShowName,episodeDetials,isLoading,episodeNumber,seasonNumber} = useEpisodeDetials()
  if (isLoading) {
    return <MovieDetialsLoadingScreen/>
  }
  return (
    <div className=' pb-5 pt-22'>
      <h1 className="text-3xl sm:text-4xl font-extrabold px-4 mb-6 text-gray-900 dark:text-white tracking-tight">
        {tvShowName}{" "}
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          — Season {seasonNumber}, Episode {episodeNumber}
        </span>
      </h1>
     <div className=" px-5 mb-4 mx-auto grid md:grid-cols-4 gap-10 items-start">
  <div className="rounded-2xl h-full overflow-hidden shadow-lg bg-white dark:bg-[#1f1f1f]">
    <img
      src={
        episodeDetials?.still_path
          ? `https://image.tmdb.org/t/p/w500/${episodeDetials?.still_path}`
          : notFoundImg
      }
      alt={episodeDetials?.name}
      className="w-full h-full object-fill"
    />
  </div>

  <div className="md:col-span-3 space-y-6 text-gray-900 dark:text-white">
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
      {episodeDetials?.name}{" "}
      <span className="text-gray-600 dark:text-gray-400 text-xl font-medium">
        ({episodeDetials?.air_date})
      </span>
    </h2>

    <div className="flex flex-wrap gap-2 sm:gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
      <span>{episodeDetials?.air_date}</span>
      <span>•</span>
      <span>Season {episodeDetials?.season_number}</span>
      <span>•</span>
      <span>Episode {episodeDetials?.episode_number}</span>
    </div>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-inner">
        {Number(episodeDetials?.vote_average?.toFixed(1)) * 10 + "%"}
      </div>
      <span className="text-base font-semibold text-gray-800 dark:text-gray-200">User Score</span>
    </div>

    <p className="italic text-base text-gray-700 dark:text-gray-300">
      {episodeDetials?.runtime} mins
    </p>

    <div>
      <h3 className="text-xl font-semibold mb-2">Overview</h3>
      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
        {episodeDetials?.overview}
      </p>
    </div>
  </div>
</div>

      <h3 className="text-gray-900 px-5 dark:text-white font-bold text-2xl">Crew</h3>
<Carousel
                className="mb-4 px-5 py-4"
                responsive={responsive}
                itemClass="pe-5"
      >
        {episodeDetials?.crew.map(person =><Link onClick={scrollTOTop} to={`/people/${person.id}`}  className="block bg-white h-full dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src={person.profile_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${person.profile_path}` : notFoundImg}
                            alt={person.name}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{person.name}</h2>
                            <h2 className="text-base font-semibold text-gray-600 text-center">{person.known_for_department}</h2>
                        </div>
                    </Link>)}
      </Carousel>
      <h3 className="text-gray-900 px-5 dark:text-white font-bold text-2xl">Guest Stars</h3>
<Carousel
                className="mb-4 px-5 py-4"
                responsive={responsive}
                itemClass="pe-5"
      >
        {episodeDetials?.guest_stars.map(person =><Link onClick={scrollTOTop} to={`/people/${person.id}`}  className="block bg-white h-full dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src={person.profile_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${person.profile_path}` : notFoundImg}
                            alt={person.name}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{person.name}</h2>
                            <h2 className="text-base font-semibold text-gray-600 text-center">{person.character}</h2>
                        </div>
                    </Link>)}
      </Carousel>
      </div>
  )
}
