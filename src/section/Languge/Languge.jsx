import './Languge.css'
import fly from '../../assets/paperplane.png'
import arabe from '../../assets/arabic.png'
import english from '../../assets/english.png'
import frensh from '../../assets/France.png'
import allmand from '../../assets/Germany.png'
import {Lang} from '../../components/index'
function Languge() {
  return (
    <>

        <div className='container-lang' data-aos="zoom-in">
        <img src={fly} alt="Fly" className="fly" data-aos="fade-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-delay="100" />
           <div style={{padding:'30px 0px 20px 40px'}} data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-delay="100" ><Lang srcLang={arabe} alt="Arabic" level="Native" txtcol="#118DFF"/></div>
            <div style={{padding:'30px 0px 30px 40px'}} data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-delay="150"><Lang srcLang={english} alt="English"  level="Advanced" txtcol="#D625C4"/></div>
            <div style={{padding:'30px 0px 30px 40px'}} data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-delay="200"><Lang srcLang={frensh} alt="French" level="Advanced" txtcol="#D625C4"/></div>
            <div style={{padding:'30px 0px 10px 40px'}} data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-delay="250"><Lang srcLang={allmand} alt="Deutsch" level="Biginner" txtcol="#D625C4"/></div>
        
           
            
        </div>
      
    </>
  )
}

export default Languge
