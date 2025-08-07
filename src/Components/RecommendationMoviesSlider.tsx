import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoudingISlider from "./LoudingSlider";
import { Link } from "react-router";
import useRecommendationMovies from "../Hooks/useRecommendationMovies";
import notFoundImg from '../assets/No_Image_Available.jpg'
export default function RecommendationMoviesSlider({ movieId }: { movieId: string }) {
    const {results,isLoading} = useRecommendationMovies(movieId)
    if (isLoading) {
        return <LoudingISlider/>
    }
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
  return (
    <div className="my-4">
          {results?.length ? <h2 className="text-gray-800  dark:text-white font-bold text-3xl mb-4">Recommendation</h2> : ''}
          <Carousel
                    className="mb-4 pb-4"
                    responsive={responsive}
                    itemClass="pe-5"
                  >
                    {results?.slice(0, 10).map(movie => 
                          <Link to={`/movies/${movie.id}/overview`} key={movie.id}  className="block h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                  <img
                                      className="w-full h-48 object-cover"
                          src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${movie.backdrop_path}`  :  notFoundImg }
                                      alt={movie.title}
                                  />
                                  <div className="p-4">
                                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{movie.title}</h2>
                                      <h2 className="text-base font-semibold text-gray-600 text-center">{movie.release_date}</h2>
                                  </div>
                              </Link>
                        )}
                  </Carousel>
    </div>
  )
}
