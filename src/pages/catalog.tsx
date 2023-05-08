import { MediaType } from '../types'

interface Props {
  type: MediaType | 'search'
}

export default function catalog(props: Props) {
  return <div>{props.type}</div>
}
