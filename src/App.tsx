import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/Light'
import darkTheme from './themes/Dark'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(true)
  const [activeTab, setActiveTab] = useState<'about' | 'projects'>('about')

  function changeTheme() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar
          changeTheme={changeTheme}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDarkTheme={usingDarkTheme}
        />
        <main>
          <About activeTab={activeTab} />
          <Projects activeTab={activeTab} />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
