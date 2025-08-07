import { Link } from "react-router";
import { castAndCrewType } from "../Types/CastAndCrewType";
import NotfoundImage from "../assets/images.png"
export default function CastorCrewPerson({data} : {data : castAndCrewType}) {
  return (
     <Link to={`/people/${data.id}`} className="flex items-center gap-4 p-4  bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg mb-2 transition-shadow duration-300">
      <img
        src={data.profile_path ? `https://image.tmdb.org/t/p/w500_and_h282_face/${data.profile_path}` : NotfoundImage}
        alt={data.name}
        className="w-25 h-25 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
      />
      <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{ data.name }</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{ data.character }</p>
      </div>
    </Link>
  )
}
