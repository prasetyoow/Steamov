import { useParams } from 'react-router-dom'
import { MediaType } from '../types'
import Section from '../components/section'
import Image from '../components/Image'

interface Props {
  mediaType: MediaType
}

export default function Film(props: Props) {
  const { params } = useParams()

  return (
    <>
      <div className="h-[300px] absolute left-0 right-0 top-0">
        <Image src=""></Image>
      </div>
      {/* poster and text */}
      <Section className="flex item-start relative z-10 -mt-[150px]">
        <Image src="" className="w-[148px] m-w-[148px] h-[192px]" />
      </Section>
    </>
  )
}
