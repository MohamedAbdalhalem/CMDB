import { NavLink, Outlet, useParams } from 'react-router'

export default function MovieDetials() {
  const { id } = useParams()
  return (
    <>
      <div className=" px-5 pb-5 pt-20 flex justify-center flex-wrap items-center gap-6 py-4 border-b border-gray-800 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
        <NavLink
              to={`/movies/${id}/overview`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Overview
            </NavLink>
        <NavLink
              to={`/movies/${id}/cast&crew`}
              className="relative cursor-pointer px-3 py-1 text-sm font-semibold transition hover:text-[#1A71E3]"
            >
             Cast & Crew
            </NavLink>
        </div>
      <Outlet  />
</>
  )
}
