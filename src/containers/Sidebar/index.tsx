import { Moon, Sun } from 'lucide-react'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { LinkButton } from '../../components/Project/styles'
import Title from '../../components/Title'

import {
  Description,
  ThemeButton,
  SidebarContainer,
  TabContainer,
  TabButton,
  ToggleSlider
} from './styles'

type Props = {
  changeTheme: () => void
  activeTab: 'about' | 'projects'
  setActiveTab: (tab: 'about' | 'projects') => void
  isDarkTheme: boolean
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Tainan</Title>
        <Description type="principal">Desenvolvedor Web Full-Stack</Description>
        <Paragraph type="secondary" fontSize={16}>
          <LinkButton
            href="https://github.com/tainanpenning"
            target="_blank"
            rel="noreferrer"
          >
            Meu Github
          </LinkButton>
        </Paragraph>
        <ThemeButton onClick={props.changeTheme} isDark={props.isDarkTheme}>
          <ToggleSlider isDark={props.isDarkTheme}>
            {props.isDarkTheme ? <Sun /> : <Moon />}
          </ToggleSlider>
        </ThemeButton>
        <TabContainer>
          <TabButton
            isActive={props.activeTab === 'about'}
            onClick={() => props.setActiveTab('about')}
          >
            Sobre
          </TabButton>
          <TabButton
            isActive={props.activeTab === 'projects'}
            onClick={() => props.setActiveTab('projects')}
          >
            Projetos
          </TabButton>
        </TabContainer>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
