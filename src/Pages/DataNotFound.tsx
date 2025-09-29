import { useLayoutEffect } from "react";
import { Link } from "react-router";

export default function DataNotFound() {
  useLayoutEffect(() => {
      window.scrollTo(0,0)
    },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Data Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sorry, we couldn't find the data you were looking for.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-6 py-2 rounded-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
