import { castAndCrewType } from "../Types/CastAndCrewType";
import CastorCrewPerson from "./CastorCrewPerson";

export default function SplitCrews({ data }: { data: castAndCrewType[] | undefined }) {
  return (
    <div className="CostumeAndMake_Up">
          {data && data.length !== 0 ? (
            <h3 className="text-gray-800 mt-4 dark:text-white font-bold text-3xl">
              {data[0].known_for_department + ' '}
              <span className="text-gray-600 dark:text-gray-300">{data.length}</span>
            </h3>
          ) : ''}
        {data && data.map(ele => <CastorCrewPerson key={ele.id} data={ele}/>)}
    </div>
  )
}
