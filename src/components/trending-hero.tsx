import { useNavigate } from 'react-router-dom'
import { Film } from '../interfaces'
import Image from './Image'
import { MdPlayCircleOutline } from 'react-icons/md'

interface Props {
  film: Film
}

export default function TrendingHero(props: Props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/${props.film.mediaType}/${props.film.id}`)}
      className="h-[300px] relative flex items-center cursor-pointer"
    >
      {/* bg image */}
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <div className="overlay-slick-hero"></div>
        <Image src=""></Image>
      </div>
      {/* text */}
      <div className="flex flex-col gap-3 items-start relative z-10 mx-[55px] max-w-[50%] mobile:max-w-[100%]">
        <p className="text-xl max-w-[50%] line-clamp-2">{props.film.title}</p>
        <p className="text-sm line-clamp-3">{props.film.description}</p>
        <button className="px-3 py-1.5 flex item-center gap-3 bg-primary rounded-md">
          <MdPlayCircleOutline className="mt-1" size={18} />
          <span>Play trailers</span>
        </button>
      </div>
    </div>
  )
}
