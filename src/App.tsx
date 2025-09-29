import { createBrowserRouter, RouterProvider} from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { ourStore } from "./lib/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout";
import AuthRoute from "./Components/AuthRoute";
import UnAuthRoute from "./Components/UnAuthRoute";
import Register from "./Pages/Register";
import MovieOverview from "./Components/MovieOverview";
import MovieDetials from "./Pages/MovieDetials";
import AllMovies from "./Pages/AllMovies";
import People from "./Pages/People";
import TvShows from './Pages/TvShows';
import PersonDetials from "./Pages/PersonDetials";
import MovieCastandCrew from "./Components/MovieCastandCrew";
import TvShowDetials from "./Pages/TvShowDetials";
import TvShowOverview from "./Components/TvShowOverview";
import TvShowCastandCrew from "./Components/TvShowCastandCrew";
import SeasonDetials from "./Pages/SeasonDetials";
import EpisodeDetials from "./Pages/EpisodeDetials";
import SearchResults from "./Pages/SearchResults";
import DataNotFound from "./Pages/DataNotFound";

const router = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { path: '', element: <AuthRoute><Home /></AuthRoute> },
    {path:'Movies',element:<AuthRoute><AllMovies/></AuthRoute>},
    {
      path: 'Movies/:id', element: <AuthRoute><MovieDetials /></AuthRoute>,
      children: [
        { path: '', element: <MovieOverview /> },
        { path: 'overview', element: <MovieOverview /> },
        {path:'cast&crew',element:<MovieCastandCrew/>}
      ]
    },
    { path: "tvShows", element: <AuthRoute><TvShows /></AuthRoute> },
     {
      path: 'tvShows/:id', element: <AuthRoute><TvShowDetials /></AuthRoute>,
      children: [
        { path: '', element: <TvShowOverview /> },
        { path: 'overview', element: <TvShowOverview /> },
        {path:'cast&crew',element:<TvShowCastandCrew/>}
      ]
    },
    { path: 'tvShows/:tvShowId/:tvShowName/season/:seasonNumber', element: <AuthRoute><SeasonDetials /></AuthRoute> },
    {path:'tvShows/:tvShowId/:tvShowName/season/:seasonNumber/episode/:episodeNumber',element:<AuthRoute><EpisodeDetials/></AuthRoute>},
    { path: 'People', element: <AuthRoute><People /></AuthRoute> },
    { path: 'People/:personId', element: <AuthRoute><PersonDetials /></AuthRoute> },
    {path: 'searchResults/:type/:q',element:<AuthRoute><SearchResults/></AuthRoute>},
    { path: 'register', element: <UnAuthRoute><Register /></UnAuthRoute>  },
    { path: 'login', element: <UnAuthRoute><Login /></UnAuthRoute> },
    {path: '*',element:<DataNotFound/>}
  ]
}])

const queryClient = new QueryClient()
export default function App() {
  
return (
    <>
    
        <Provider store={ourStore}>
          <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} >
          
            </RouterProvider>
          </QueryClientProvider>
        </Provider>
      
    </>
  )
}
