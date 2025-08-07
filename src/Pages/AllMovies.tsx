import MainLoudingScreen from '../Components/MainLoudingScreen';
import Pagination from '../Components/Pagination';
import useAllMovies from '../Hooks/useAllMovies';
import Filter from '../Components/Filter';
import useGenreMovies from '../Hooks/useGenreMovies';
import Card from '../Components/Card';

export default function AllMovies() {
  const { results, handlePageChange, isLoading, page, numOfPages,filter } = useAllMovies();
  const genres = useGenreMovies();
  if (isLoading) {
    return <MainLoudingScreen />;
  }

  return (
    <div className="px-5 pb-5 pt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl">All Movies</h1>
        <Filter isMovies genres={genres} filter={filter} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {results?.map((movie) => (
          <Card type='movie' movieData={movie} />
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
