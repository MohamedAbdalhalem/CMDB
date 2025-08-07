import notFoundImg from '../assets/No_Image_Available.jpg'
import { useParams } from 'react-router'
import PersonDetialsLoadingScreen from '../Components/PersonDetialsLoadingScreen'
import usePersonDetials from '../Hooks/usePersonDetials'
import PersonSocialMediaSection from '../Components/PersonSocialMediaSection'
import KnowForSlider from '../Components/KnowForSlider'
import PersonCredits from '../Components/PersonCredits'
export default function PersonDetials() {
  const {personId} = useParams()
  const {personDetials,isLoading,age} = usePersonDetials(personId!)
  if (isLoading) {
    return <PersonDetialsLoadingScreen/>
  }
  return (
   
<div className="px-5 pb-5 pt-22">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-4">
  <div className="rounded-xl h-100 md:h-full w-full ">
    <img src={personDetials?.profile_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${personDetials.profile_path}` : notFoundImg} alt={personDetials?.name} className="w-full shadow-lg rounded-xl h-full object-fill" />
  </div>
  <div className="md:col-span-3">
          <h1 className="text-gray-900 dark:text-white mb-4 font-bold text-4xl">
            {personDetials?.name}
    </h1>
    <h3 className="text-gray-900 dark:text-white mb-2 font-bold text-xl">Biography :</h3>
    <p className="text-gray-400 text-base mb-4">
     {personDetials?.biography ? personDetials.biography : `We Don't hava a biography for ${personDetials?.name}`}
    </p>
          
          <KnowForSlider personId={ personId! } />
    </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <PersonSocialMediaSection personId={ personId! } />
          <h3 className='text-gray-900 dark:text-white mb-4 font-bold text-2xl'>Personal Info</h3>
          <h4 className='text-gray-900 dark:text-white mb-2 font-bold text-lg'>Known For :</h4>
          <p className='text-gray-900 dark:text-white text-base mb-4'>{ personDetials?.known_for_department }</p>
          <h4 className='text-gray-900 dark:text-white mb-2 font-bold text-lg'>Gender :</h4>
          <p className='text-gray-900 dark:text-white text-base mb-4'>{ personDetials?.gender == 1 ? 'Female' :  'Male' }</p>
          {personDetials?.birthday && <h4 className='text-gray-900 dark:text-white mb-2 font-bold text-lg'>Birthday :</h4>}
          {personDetials?.birthday && <p className='text-gray-900 dark:text-white text-base mb-4'>{ personDetials?.birthday } ( {age} Years )</p>}
          {personDetials?.place_of_birth && <h4 className='text-gray-900 dark:text-white mb-2 font-bold text-lg'>Place of Birth :</h4>}
          {personDetials?.place_of_birth && <p className='text-gray-900 dark:text-white text-base mb-4'>{ personDetials?.place_of_birth }</p>}
          {personDetials?.also_known_as.length != 0 && <h4 className='text-gray-900 dark:text-white mb-2 font-bold text-lg'>Also Known As :</h4>}
          {personDetials?.also_known_as.map((ele, idx) => <p key={idx} className='text-gray-900 dark:text-white text-base mb-4'>{ ele }</p>)}
        </div>
        <div className='col-span-1 md:col-span-3'>
          <PersonCredits department={personDetials?.known_for_department!} personId={personId!} />
        </div>
      </div>
</div> 
    
  )
}
 