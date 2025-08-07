import MainLoudingScreen from "../Components/MainLoudingScreen"
import Card from "../Components/Card"
import Pagination from "../Components/Pagination"
import DataNotFound from "./DataNotFound"
import useSearchResults from "../Hooks/useSearchResults"


export default function SearchResults() {
  const {results,numOfPages,handlePageChange,isLoading,typeSearch,page,type} = useSearchResults()
  if (isLoading) {
    return <MainLoudingScreen/>
  }
  if (results?.length === 0) {
    return <DataNotFound/>
  }
  return (
    <div className="px-5 pb-5 pt-22">
      <h1 className="text-gray-900 dark:text-white text-4xl capitalize font-bold mb-4">{type}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mb-4 lg:grid-cols-5 gap-4">
        {results?.map(item =>
          <Card
            type={typeSearch as "movie" | "tv" | "person"}
            movieData={item}
            tvShowData={item}
            personData={item}
          />)}
      </div>
      <Pagination
        page={page}
        numOfPages={numOfPages!}
        pageChangeFunction={handlePageChange}
      />
    </div>
  )
}
