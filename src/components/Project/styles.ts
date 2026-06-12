import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  height: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr auto;
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  width: fit-content;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
`
