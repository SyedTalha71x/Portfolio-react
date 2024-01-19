import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import Skills from './Components/Skills'

function App() {
  const [mode, setmode] = useState('light');

  const [text, settext] = useState('Dark Mode');

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.transition = '0.3s ease-in-out';
      document.body.style.backgroundColor = '#03010b';
    }
    else {
      setmode('light');
      document.body.style.transition = '0.3s ease-in-out';
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>

      <Navbar title="Syed Talha Hussain" mode={mode} togglemode={togglemode} />
      <About mode={mode} />
      <Services mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} />


    </>
  );
}


export default App
