import Title from '../../components/Title'
import Project from '../../components/Project'

import { List, SectionContent } from './styles'

type Props = {
  activeTab: 'about' | 'projects'
}

const Projects = ({ activeTab }: Props) => (
  <SectionContent isActive={activeTab === 'projects'}>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Project
          title="Efood"
          description="Plataforma de delivery de comida, onde os usuários podem fazer pedidos em restaurantes locais e receber suas refeições em casa. O projeto foi desenvolvido utilizando React."
          link="https://efood-tau-sandy.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="not-twitter"
          description="Um projeto inspirado no Twitter, onde os usuários podem criar contas, postar mensagens, seguir outros usuários e interagir com as postagens. O projeto foi desenvolvido utilizando React, Django e PostgreSQL."
          link="https://not-twitter-five.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Eplay"
          description="Plataforma de jogos, onde os usuários podem comprar e jogar diversos títulos. O projeto foi desenvolvido utilizando React."
          link="https://eplay-one.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Calculadora de IMC"
          description="Calculadora de Índice de Massa Corporal, desenvolvida com React. O usuário pode inserir seu peso e altura para calcular seu IMC e receber uma classificação de acordo com o resultado."
          link="https://calculadora-imc-react-nine-lemon.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="Calculadora de média de notas"
          description="Calculadora de média de notas, desenvolvida com JavaScript. O usuário define a nota mínima e pode inserir suas notas para calcular a média e receber uma classificação de acordo com o resultado."
          link="https://tainan-projeto-calculadora-medias.vercel.app/"
        />
      </li>
      <li>
        <Project
          title="To-Do Vue"
          description="Aplicação de lista de tarefas desenvolvida com Vue.js. O usuário pode criar, editar, marcar como concluída e excluir tarefas."
          link="https://to-do-vue-two-phi.vercel.app/"
        />
      </li>
    </List>
  </SectionContent>
)

export default Projects
