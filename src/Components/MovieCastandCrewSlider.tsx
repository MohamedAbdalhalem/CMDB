import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoudingISlider from "./LoudingSlider";
import { Link } from "react-router";
import notFoundImg from '../assets/No_Image_Available.jpg'
import useMovieCastAndCrew from "../Hooks/useMovieCastAndCrew";
export default function MovieCastandCrewSlider({ movieId}: { movieId: string }) {
  const { cast, isLoading } = useMovieCastAndCrew(movieId)
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
  if (isLoading ) {
    return <LoudingISlider/>
  }
    return (
      <>
        {cast?.length  ? <div className="my-4 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-gray-800  dark:text-white font-bold text-3xl mb-4">cast</h2>
        <Carousel
          className="mb-4 pb-4"
          responsive={responsive}
          itemClass="pe-5"
        >
          {cast?.slice(0, 10).map(item => 
                <Link to={`/people/${item.id}`}  className="block bg-white h-full dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <img
                            className="w-full h-48 object-cover"
                            src={item.profile_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${item.profile_path}` : notFoundImg}
                            alt={item.name}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{item.name}</h2>
                            <h2 className="text-base font-semibold text-gray-600 text-center">{item.character}</h2>
                        </div>
                    </Link>
              )}
        </Carousel>
        <Link to={`/movies/${movieId}/cast&crew`} className="text-[#1A71E3] text-2xl mt-4 font-bold">See Full Cast&Crew</Link>
        </div> : ''}
      </>
    )
}
