import './Home.css'
import { LandingPage , Contactme , Techskills  , Aboutme, Languge } from '../../section/index'
// import htmlcss from '../../assets/Html5CSS3.png'
// import php from '../../assets/PHP.png'
// import mysql from '../../assets/MySQL Logo.png'
// import js from '../../assets/JavaScript.png'
// import npm from '../../assets/NPM.png'
// import laravel from '../../assets/Laravel.png'
// import python from '../../assets/Python.png'
// import react from '../../assets/React.png'
// import C from '../../assets/C.png'
// import Row from 'react-bootstrap/Row';
function Home() {
  return (
    <>
    <LandingPage/>
    <Aboutme />
    <div className='skill'>
    <Techskills/>
    {/* <Frameskills/> */}
    </div>
    <Languge/>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <Contactme bgcolor='#3C3C3B' />
      </div>
      
      
    </>
  )
}

export default Home
