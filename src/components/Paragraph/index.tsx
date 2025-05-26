import { P as ParagraphStyle } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secondary'
}

const Paragraph = ({ children, type = 'principal' }: Props) => (
  <ParagraphStyle type={type}>{children}</ParagraphStyle>
)

export default Paragraph
