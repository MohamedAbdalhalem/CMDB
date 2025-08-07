import { Spinner } from "flowbite-react"
import usePersonSocialMedia from "../Hooks/usePersonSocialMedia"

export default function PersonSocialMediaSection({ personId }: { personId: string }) {
    const { socialMedia, isLoading } = usePersonSocialMedia(personId)
    if (isLoading) {
        return <div className='flex gap-5 flex-wrap mb-4'>
                        <Spinner color="purple" aria-label="Purple spinner example" />
                        <Spinner color="purple" aria-label="Purple spinner example" />
                        <Spinner color="purple" aria-label="Purple spinner example" />
                        <Spinner color="purple" aria-label="Purple spinner example" />
                 </div>
    }
  return (
    <div className='flex gap-5 flex-wrap mb-4'>
            {socialMedia?.facebook_id && <a href={`https://www.facebook.com/${socialMedia.facebook_id}`} target="_blank" className="fa-brands cursor-pointer fa-square-facebook text-gray-900 dark:text-white text-2xl"></a>}      
            {socialMedia?.instagram_id && <a href={`https://www.instagram.com/${socialMedia.instagram_id}`} target="_blank" className="fa-brands cursor-pointer fa-instagram text-gray-900 dark:text-white text-2xl"></a>}      
            {socialMedia?.tiktok_id && <a href={`https://www.tiktok.com/@${socialMedia.tiktok_id}`} target="_blank" className="fa-brands cursor-pointer fa-tiktok text-gray-900 dark:text-white text-2xl"></a>}      
            {socialMedia?.twitter_id && <a href={`https://x.com/${socialMedia.twitter_id}`} target="_blank" className="fa-brands cursor-pointer fa-square-x-twitter text-gray-900 dark:text-white text-2xl"></a>}      
            {socialMedia?.youtube_id && <a href={`https://x.com/${socialMedia.youtube_id}`} target="_blank" className="fa-brands cursor-pointer fa-youtube text-gray-900 dark:text-white text-2xl"></a>}      
            {socialMedia?.wikidata_id && <a href={`https://www.wikidata.org/wiki/${socialMedia.wikidata_id}`} target="_blank" className="fa-brands cursor-pointer fa-wikipedia-w text-gray-900 dark:text-white text-2xl"></a>}      
          </div>
  )
}
