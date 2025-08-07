import Card from "../Components/Card"
import MainLoudingScreen from "../Components/MainLoudingScreen"
import Pagination from "../Components/Pagination"

import usePeople from "../Hooks/usePeople"


export default function People() {
    const { handlePageChange, page, isLoading, results } = usePeople()
    if (isLoading) {
            return <MainLoudingScreen/>
        }
  return (
      <div className="px-5 pb-5 pt-20">
          <h1 className="text-gray-800 dark:text-white mb-4 font-bold text-4xl">
              Popular People
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {results?.map(
                  person => <Card type="person" personData={person} />)}
          </div>
          <Pagination numOfPages={500} page={page}  pageChangeFunction={handlePageChange}/>
    </div>
  )
}
