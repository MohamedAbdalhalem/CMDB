import MainLoudingScreen from '../Components/MainLoudingScreen';
import Pagination from '../Components/Pagination';
import Filter from '../Components/Filter';
import useGenreTvShows from '../Hooks/useGenreTvShows';
import useTvShows from '../Hooks/useTvShows';
import Card from '../Components/Card';

export default function TvShows() {
    const { results, handlePageChange, isLoading, page, numOfPages,filter } = useTvShows();
    const genres = useGenreTvShows()
  if (isLoading) {
    return <MainLoudingScreen />;
  }

  return (
    <div className="px-5 pb-5 pt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl">Tv Shows</h1>
        <Filter isMovies={false} genres={genres} filter={filter} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {results?.map((tvshow) => (
         <Card type='tv' tvShowData={tvshow} />
        ))}
      </div>

      <Pagination
        numOfPages={numOfPages!}
        page={page}
        pageChangeFunction={handlePageChange}
      />
    </div>
  );
}
