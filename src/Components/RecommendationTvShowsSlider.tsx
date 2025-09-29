import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoudingISlider from "./LoudingSlider";
import { Link } from "react-router";
import notFoundImg from '../assets/No_Image_Available.jpg'
import useRecommendationTvShows from "../Hooks/useRecommendationTvShows";
import { scrollTOTop } from "../utilities";

export default function RecommendationTvShowsSlider({ tvShowId }: { tvShowId: string }) {
    const {results,isLoading} = useRecommendationTvShows(tvShowId)
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
          {results?.length ? <h2 className="text-gray-800  dark:text-white font-bold text-3xl mb-4">Recommendation TvShows</h2> : ''}
          <Carousel
                    className="mb-4 pb-4"
                    responsive={responsive}
                    itemClass="pe-5"
                  >
                    {results?.slice(0, 10).map(tvShow => 
                      <Link
                        onClick={scrollTOTop}
                        to={`/tvShows/${tvShow.id}/overview`} key={tvShow.id} className="block h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                  <img
                                      className="w-full h-48 object-cover"
                          src={ tvShow.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${tvShow.backdrop_path}`  :  notFoundImg }
                                      alt={tvShow.name}
                                  />
                                  <div className="p-4">
                                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{tvShow.name}</h2>
                                      <h2 className="text-base font-semibold text-gray-600 text-center">{tvShow.first_air_date}</h2>
                                  </div>
                              </Link>
                        )}
                  </Carousel>
    </div>
  )
}

