import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection, SectionContent } from './styles'

type Props = {
  activeTab: 'about' | 'projects'
}

const About = ({ activeTab }: Props) => (
  <SectionContent isActive={activeTab === 'about'}>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Me chamo Tainan, sou um desenvolvedor web full-stack com experiência em
      TypeScript, Python, React e Django. Desde pequeno, sempre gostei de
      computadores e tecnologia, e explorar suas funcionalidades e como eles
      funcionam. Com isso acabei conhecendo a programação através de um parente
      meu que ingressou na mesma área que eu estou tentando entrar agora, e
      desde então estou focado em aprimorar minhas habilidades em
      desenvolvimento web e buscando aprender novas tecnologias e técnicas para
      me tornar um desenvolvedor mais completo.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=tainanpenning&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tainanpenning&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </SectionContent>
)

export default About
