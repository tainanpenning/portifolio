import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
`

interface ThemeButtonProps {
  isDark: boolean
}

export const ThemeButton = styled.button<ThemeButtonProps>`
  position: relative;
  width: 60px;
  height: 32px;
  border-radius: 16px;
  border: none;
  margin-top: 16px;
  background-color: ${(props) =>
    props.isDark ? props.theme.primaryColor : props.theme.secondaryColor};
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 16px auto;
  }
`

interface ToggleSliderProps {
  isDark: boolean
}

export const ToggleSlider = styled.div<ToggleSliderProps>`
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  left: ${(props) => (props.isDark ? '30px' : '2px')};
  transition: left 0.3s ease;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const TabContainer = styled.div`
  display: none;
  gap: 8px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

interface TabButtonProps {
  isActive: boolean
}

export const TabButton = styled.button<TabButtonProps>`
  padding: 8px 16px;
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  background-color: ${(props) =>
    props.isActive ? props.theme.primaryColor : 'transparent'};
  color: ${(props) =>
    props.isActive ? props.theme.backgroundColor : props.theme.primaryColor};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.backgroundColor};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`
