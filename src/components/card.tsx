import { useNavigate } from 'react-router-dom'
import { Film } from '../interfaces'
import Image from './Image'

interface Props {
  film: Film
}

export default function Card(props: Props) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/${props.film.mediaType}/${props.film.id}`)}
      className="mx-3 my-1.5 cursor-pointer"
    >
      <Image src="" className="h-[200px]"></Image>
      <p className="py-1.5 line-clamp-2">{props.film.title}</p>
    </div>
  )
}
