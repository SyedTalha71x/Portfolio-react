import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'

function App() {
  const [mode, setmode] = useState('light');

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
      <Projects mode={mode} />
      <Contact mode={mode} />
    </>
  );
}


export default App
