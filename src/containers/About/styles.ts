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
