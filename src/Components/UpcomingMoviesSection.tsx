import Carousel from "react-multi-carousel";
import LoudingISlider from "./LoudingSlider";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import SliderItem3 from "./SliderItem3";

export default function UpcomingMoviesSection() {
    const {isLoading,resluts} = useUpcomingMovies()
   const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3  
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
  };
  if (isLoading) {
    return <LoudingISlider/>
  }
  return (
      <div className='upComing p-5 mb-4'>
          <h3 className="text-gray-800 dark:text-white text-3xl mb-4 font-bold">UpComing Movie</h3>
          
      <Carousel
          className="mb-4 pb-4"
          responsive={responsive}
          itemClass="pe-5"
      >
        {resluts?.map(movie => <SliderItem3 key={movie.id} movieData={movie}/>)}
        </Carousel>
    </div>
  )
}
