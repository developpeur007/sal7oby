import './App.css'
import {useEffect} from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import toLight from './assets/toLight.png'
import toDark from './assets/toDark.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Header , Theme} from './section/index'
import { Home , Projects} from './Pages/index'
import { Container } from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react';
const App = () => {
  useEffect(() =>{
    AOS.init({duration: 1000})
  } , []);


  const changeToLight = () =>{
    window.localStorage.setItem("selectedTheme" , "light")
    let root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root)
    root.style.setProperty('--primarycolor' , "#FFF")
    root.style.setProperty('--Footer' , "#666666")
    root.style.setProperty('--scondarycolor' , "#666666")
    root.style.setProperty('--secondarycolor' , "#3C3C3B")
    root.style.setProperty('--box' , "#F5CB5C")
    // console.log(localStorage.getItem("selectedTheme"))
    
    
    
  }
  const changeToDark = () =>{
    
    window.localStorage.setItem("selectedTheme" , "dark")
    let root = document.querySelector(':root');
    // var rootStyles = getComputedStyle(root)
    root.style.setProperty('--primarycolor' , "#242423")
    root.style.setProperty('--Footer' , "#FFF")
    root.style.setProperty('--scondarycolor' , "#FFF")
    root.style.setProperty('--secondarycolor' , "#FFF")
    root.style.setProperty('--box' , "#3C3C3B")
    // console.log(localStorage.getItem("selectedTheme"))
    
  }
 
  
  // if (selectedTheme === 'light') {
    //    changeToLight()
    
    
    // }else{
      //   changeToDark()
      
      // }
    const [themes,setTheme] = useState(true)
    const theme = () => {
        const selectedTheme = window.localStorage.getItem("selectedTheme")
        if (selectedTheme === "dark") {
          setTheme(false)
          changeToLight()
        }else{
          changeToDark()
          setTheme(true)

        }
  }


  // Check if the page has already been reloaded


  return (
    <>
    <Container >  
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <img src={themes ? toLight : toDark} alt={theme ? `dark` : `light`} className='toLight' id='theme' onClick={theme} />
    </Router>
    </Container>

    
    {/* <Theme srcImg={toDark} name="Dark" /> */}
    </>

  )
}

export default App
