import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: inline-flex;
  gap: 14px;

  @media (max-width: 768px) {
    display: grid;
    justify-content: center;
    gap: 8px;
  }

  img {
    height: 160px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
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
