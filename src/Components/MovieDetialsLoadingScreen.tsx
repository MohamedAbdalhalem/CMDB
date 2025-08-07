

export default function MovieDetialsLoadingScreen() {
  return (
    <div className="p-6 animate-pulse max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="h-[400px] bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="md:col-span-3 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 w-2/3 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 w-1/2 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 w-5/6 rounded"></div>
        <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  )
}
