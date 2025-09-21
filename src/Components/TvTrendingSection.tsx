import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoudingISlider from "./LoudingSlider";
import useTvTrending from "../Hooks/useTvTrending";
import SliderItem2 from "./SliderItem2";
import { useMemo } from "react";
export default function TvTrendingSection() {
  const {resluts,isLoading,filter,isDay} = useTvTrending()
  const responsive = useMemo(() => (
   {
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
  }
 ),[]) 
  if (isLoading) {
    return <LoudingISlider/>
  }
  return (
    <div className="p-5 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          <h3 className="text-gray-800 dark:text-white text-2xl font-bold">Trending Tv Shows</h3>
        <select
          value={isDay}
          onChange={(e) => filter(e.target.value as "day" | "week")} className="block cursor-pointer appearance-none rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 pr-10 text-sm text-gray-700 dark:text-gray-200 font-bold  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
        <option value='day' className="font-bold">Today</option>
        <option value='week' className="font-bold">This  Week</option>
      </select>
      </div>
        <Carousel
                  className="mb-4 pb-4"
                  responsive={responsive}
                  itemClass="pe-5"
      >
        { resluts?.map(tv => <SliderItem2 key={tv.id} tvData={ tv } />)}
                </Carousel>
      </div>
    
  );
}
