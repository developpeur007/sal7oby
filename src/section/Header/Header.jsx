import './Header.css'
import logodark from '../../assets/logo-dark.png'
import logolight from '../../assets/logo-white.png'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  var logo = logodark;
    const selectedTheme = localStorage.getItem("selectedTheme")
    if (selectedTheme === "dark") {
      logo = logodark;
      
    }else{
      logo = logolight;
    }
  
  
  
  return (
    
   
    <Navbar expand="md" className="navbar bal-navbar">
       
      <Container>
        
        <Navbar.Brand >
        <RouterLink to='/'><img src={logo} alt='' style={{height: "50px", width:"auto"}}/></RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'  id='navtog' />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
                <Nav.Link><ScrollLink  to="about-me" smooth={true} duration={500} className='nav-link head-cl'>About Me</ScrollLink></Nav.Link>
                <Nav.Link><ScrollLink to="my-skills" smooth={true} duration={500} className="nav-link head-cl">My Skills</ScrollLink></Nav.Link>
                <Nav.Link><ScrollLink to="contact-me" smooth={true} duration={500} className="nav-link head-cl">Contact Me</ScrollLink></Nav.Link>
                <Nav.Link><RouterLink to="/projects" className="nav-link head-cl">My Projects</RouterLink> </Nav.Link>      
            </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header
