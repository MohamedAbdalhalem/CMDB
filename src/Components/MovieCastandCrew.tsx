import { useParams } from "react-router"
import CastorCrewPerson from "./CastorCrewPerson"
import SplitCrews from "./SplitCrews"
import CastAndCrewLoadingScreen from "./CastAndCrewLoadingScreen"
import useMovieCastAndCrew from "../Hooks/useMovieCastAndCrew"

export default function MovieCastandCrew() {
  const { id } = useParams()
  const {cast,crews,isLoading,directing,Art,Sound,Writing,Production,Crew,Camera,CostumeAndMake_Up,Editing,VisualEffects} = useMovieCastAndCrew(id) 
    
    if (isLoading) {
        return <CastAndCrewLoadingScreen/>
    }
  return (
    <div className="p-5">
          
          <div className="grid  md:grid-cols-2 gap-20">
              <div className="cast">
                  <h2 className="text-gray-800 mb-4 md:mb-13 dark:text-white font-bold text-4xl">
                      Cast <span className="text-gray-600 dark:text-gray-300">{ cast?.length }</span>
                  </h2>
                  {cast?.map(ele => <CastorCrewPerson key={ele.id} data={ele}/>)}
              </div>
              <div className="crew">
                  <h2 className="text-gray-800 mb-4 dark:text-white font-bold text-4xl">
                      Crew <span className="text-gray-600 dark:text-gray-300">{crews?.length}</span>
                      <SplitCrews data={Art}/>
                      <SplitCrews data={directing}/>
                      <SplitCrews data={Sound}/>
                      <SplitCrews data={Writing}/>
                      <SplitCrews data={Production}/>
                      <SplitCrews data={Crew}/>
                      <SplitCrews data={Camera}/>
                      <SplitCrews data={CostumeAndMake_Up}/>
                      <SplitCrews data={Editing}/>
                      <SplitCrews data={VisualEffects}/>
                  </h2>
              </div>
          </div>
    </div>
  )
}
