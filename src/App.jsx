import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Contact from './components/Contact'


function App() { 

  return ( 
    <div className="nunito-sans dark:bg-[#5072A7] min-h-screen transition-colors">
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App
