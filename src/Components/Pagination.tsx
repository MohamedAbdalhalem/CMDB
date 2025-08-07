
import ReactPaginate from 'react-paginate'

export default function Pagination({numOfPages ,page , pageChangeFunction} : {numOfPages : number ,page: number, pageChangeFunction : ( { selected }: { selected: number } ) =>void}) {
  return (
    <ReactPaginate
          pageCount={numOfPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          containerClassName="flex justify-center items-center gap-2 mt-4 px-5 "
          pageClassName="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          activeClassName="bg-blue-600 text-white font-bold"
          previousLabel={<i className='fa-solid fa-chevron-left'></i>}
          nextLabel={<i className='fa-solid fa-chevron-right'></i>}
          previousClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          nextClassName="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          breakLabel='...'
          breakClassName="text-gray-400 px-2"
          disabledClassName="opacity-50 cursor-not-allowed"
          forcePage={page - 1}
          onPageChange={pageChangeFunction}
    />
  )
}
