import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

type Props = {
  title: string
  description: string
  link: string
}

const Project = (props: Props) => (
  <Card>
    <Title>{props.title}</Title>
    <Paragraph type="secondary">{props.description}</Paragraph>
    <LinkButton href={props.link} target="_blank" rel="noreferrer">
      Visualizar
    </LinkButton>
  </Card>
)

export default Project
