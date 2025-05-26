import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sint
      mollitia quidem aliquid, perferendis reiciendis velit eos voluptate quas
      officiis impedit tenetur quo amet fuga? Amet esse architecto officia
      facilis!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=tainanpenning&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tainanpenning&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
