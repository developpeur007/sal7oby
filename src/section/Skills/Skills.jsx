import './Skills.css'
import { Progressbar } from '../../components/index'
function Techskills() {
  
  return (
    
    <>
    <div className="container-skills" data-aos="fade-up" >
      <div className="techskills">
      <div className="con">
          <h1 className=" skills-title" >Technical Skills</h1>
        </div>
        <Progressbar name="html & css" now="80" class="html"/>
        <Progressbar name="PHP" now="60" class="php"/> 
        <Progressbar name="JavaScript" now="40" class="js"/>
        <Progressbar name="C Languge" now="25" class="c"/>
        <Progressbar name="Python" now="40" class="python"/>
        <Progressbar name="My SQL" now="80" class="mysql"/>
            
    </div>
    <div className="framskills">
    <div className="con">
          <h1 className=" skills-title" >Frame Work Skills</h1>
      </div>
            <Progressbar name="React" now="40" class="js"/>
            <Progressbar name="Laravel" now="25" class="c"/> 
            <Progressbar name="Bootstrap" now="60" class="php"/>
            <Progressbar name="HTMX" now="40" class="js"/>
    </div>
    </div>
    
    </>
  )
}


export default Techskills





