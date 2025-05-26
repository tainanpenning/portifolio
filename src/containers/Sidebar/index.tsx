import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Tainan</Title>
      <Paragraph type="secondary" fontSize={16}>
        tainanpenning
      </Paragraph>
      <Description type="principal">
        Aprendendo Full-Stack com Phyton
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
