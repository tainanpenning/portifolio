import { JSX } from 'react'
import { P as ParagraphStyle } from './styles'

export type Props = {
  children: JSX.Element | string
  type?: 'principal' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => (
  <ParagraphStyle fontSize={fontSize} type={type}>
    {children}
  </ParagraphStyle>
)

export default Paragraph
