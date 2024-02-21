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
const App = () => {
  useEffect(() =>{
    AOS.init({duration: 1000})
  } , []);
  var Img = toLight
  var name = "light"
  var root = document.querySelector(':root');
  var rootStyles = getComputedStyle(root)
  var primarycolor = rootStyles.getPropertyValue('--primarycolor')
  const selectedTheme = localStorage.getItem("selectedTheme")
  if (selectedTheme == "light") {
    Img = toDark;
    name = "light"
  }else {
    Img = toLight;
    name = "dark"
    
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
      <Theme srcImg={Img} name={name}/>
    </Router>
    </Container>

    
    {/* <Theme srcImg={toDark} name="Dark" /> */}
    </>

  )
}

export default App
