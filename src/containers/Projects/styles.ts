import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    columns-gap: 0;
    row-gap: 16px;
  }
`

interface SectionContentProps {
  isActive: boolean
}

export const SectionContent = styled.div<SectionContentProps>`
  @media (max-width: 768px) {
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
