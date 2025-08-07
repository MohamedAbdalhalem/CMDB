import MovieTrendingSection from "../Components/MovieTrendingSection";
import SearchSection from "../Components/SearchSection";
import TvTrendingSection from "../Components/TvTrendingSection";
import UpcomingMoviesSection from "../Components/UpcomingMoviesSection";


export default function Home() {
  
  return (
    <div className="pt-15">
      <SearchSection />
      <MovieTrendingSection />
      <UpcomingMoviesSection/>
      <TvTrendingSection />
      
    </div>
  )
}
