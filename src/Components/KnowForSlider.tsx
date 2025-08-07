import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useKnowFor from "../Hooks/useKnowFor";
import LoudingISlider from "./LoudingSlider";
import notFoundImg from '../assets/No_Image_Available.jpg'
import { Link } from 'react-router';
export default function KnowForSlider({ personId }: { personId: string }) {
  const {cast,crew,isLoading} = useKnowFor(personId)
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
    if (isLoading) {
        return <>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-4" />
                            <LoudingISlider />
        </>
    }
    return (
        <>
            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">Known For</h3>
    <Carousel
                    className="mb-4 py-4"
                    responsive={responsive}
                    itemClass="pe-5"
      >
          {cast?.map(item => <Link
            to={item.media_type == 'movie' ? `/movies/${item.id}/overview` :
              `/tvShows/${item.id}/overview`}
            key={item.id} className="block h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                  <img
                                      className="w-full h-48 object-cover"
                          src={ item.poster_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`  : notFoundImg  }
                                      alt={item.title ? item.title : item.name}
                                  />
                                  <div className="p-4">
                                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{item.title ? item.title : item.name}</h2>
                                  </div>
          </Link>)}
          {crew?.map(item => <Link
            to={item.media_type == 'movie' ? `/movies/${item.id}/overview` :
              `/tvShows/${item.id}/overview`}
            key={item.id} className="block h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                  <img
                                      className="w-full h-48 object-cover"
                          src={ item.poster_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${item.poster_path}`  : notFoundImg  }
                                      alt={item.title ? item.title : item.name}
                                  />
                                  <div className="p-4">
                                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{item.title ? item.title : item.name}</h2>
                                  </div>
          </Link>)}
            </Carousel>
            </>
  )
}
