import { Link } from "react-router"
import usePersonCredits from "../Hooks/usePersonCredits"

export default function PersonCredits({ personId, department }: { personId: string, department: string }) {
    const { cast, crew, isLoading, setMovieOrTv } = usePersonCredits(personId)
    console.log(cast,crew)
    
  return (
    <>
     <div className='flex justify-between items-center flex-wrap mb-4'>
              <h3 className="text-gray-900 dark:text-white mb-2 font-bold text-xl">{ department }</h3>
              <select
                  onChange={(e)=> setMovieOrTv(e.target.value)}
                  className="block cursor-pointer appearance-none rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 pr-10 text-sm text-gray-700 dark:text-gray-200 font-bold  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
        <option value='movie_credits' className="font-bold">Movies</option>
        <option value='tv_credits' className="font-bold">Tv Shows</option>
      </select>
      </div>
      {isLoading ? <div className='bg-white dark:bg-gray-800 shadow-lg p-5'>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4" />
              </div> : <div className='bg-white dark:bg-gray-800 shadow-lg p-5'>
            {cast?.length != 0 && <div>
            <p className="text-gray-900 mb-4 w-fit dark:text-white text-2xl font-extrabold">Cast :</p>
            {cast?.map(ele => (
              <Link
                to={ele.title ? `/movies/${ele.id}/overview` :
              `/tvShows/${ele.id}/overview`}
                key={ele.id} className='text-gray-900 block w-fit dark:text-white hover:text-[#1A71E3] transition-all font-bold text-lg mb-4 '>
                {ele.title ? ele.title : ele.name}
                <span className="text-gray-400">
                  (
                    {ele.release_date
                      ? ele.release_date.split('-')[0]
                      : ele.first_air_date
                        ? ele.first_air_date.split('-')[0]
                        : ''}
                  )
                </span>
              </Link>
            ))}
          </div>}
          {crew?.length!= 0 && <div>
            <div
             
              className="text-gray-900 mb-4 dark:text-white text-2xl font-extrabold">Crew :</div>
            {cast?.map(ele => (
              <Link
                 to={ele.media_type == 'movie' ? `/movies/${ele.id}/overview` :
              `/tvShows/${ele.id}/overview`}
                key={ele.id} className='text-gray-900 block dark:text-white hover:text-[#1A71E3] transition-all font-bold text-lg mb-4 '>
                {ele.title ? ele.title : ele.name}
                <span className="text-gray-400">
                  (
                    {ele.release_date
                      ? ele.release_date.split('-')[0]
                      : ele.first_air_date
                        ? ele.first_air_date.split('-')[0]
                        : ''}
                  )
                </span>
              </Link>
            ))}
            </div>}
          </div> }
          
    </>
  )
}
