import './LandingPage.css'

import myPhotolight from '../../assets/myPhotoLight.png'
function LandingPage() {
 



  return (
    <>
    <div className="landing-page" data-aos="fade-right">
      <div className="content-text">
        <h1 className='myname' data-aos="zoom-out"><span className='sub'>I’M</span>Balbali Saif</h1>
        <h2 className='mytitle' data-aos="zoom-in">A Full Stack Developer , UI/UX Designer And 
        phython developer </h2>
        <button className='btn'>Let's Talk</button>
      </div>
        <img src={myPhotolight} alt="My Photo" className='photo' data-aos="zoom-in"/>
        
        
        
        <div className="line" data-aos="flip-right">Hello World! <span></span></div>
    </div>
      
    </>
  )
}

export default LandingPage
