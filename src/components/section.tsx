import { CustomComponentProps } from '../interfaces'
import Container from './Container'

interface Props extends CustomComponentProps {
  title?: string
}

export default function Section(props: Props) {
  return (
    <Container className={props.className}>
      {props.title ? (
        <h1 className="text-xl px-6 py-1.5">{props.title}</h1>
      ) : (
        ''
      )}
      {props.children}
    </Container>
  )
}
