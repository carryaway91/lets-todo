import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import home from './containers/home/home';
import Portfolio from './containers/portfolio/portfolio';
import MainNav from './components/mainNav/mainNav'
import { GlobalStyle, Container, Main } from './appStyles'
import { LangContext } from './context/langContext'
import About from './containers/about/about';

function App() {
  const [lang, setLang] = useState('en')
  
  const handleLanguage = lang => {
    setLang(lang)
    localStorage.setItem('lang', JSON.stringify(lang))
  }
  
  useEffect(() => {
    let language = JSON.parse(localStorage.getItem('lang'))
    
    if(!language) {
      localStorage.setItem('lang', JSON.stringify('en'))
      setLang('en')
    }

    setLang(language)
  }, [])

  return (
    <Container>
      <GlobalStyle />
      <LangContext.Provider value={{ 
        lang: lang,
        changeLang: handleLanguage
        }}>
        <MainNav />
        <Main>

          <Switch>
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path='/' exact component={home} />
          </Switch>
        </Main>
      </LangContext.Provider>
    </Container>
  );
}

export default App;
