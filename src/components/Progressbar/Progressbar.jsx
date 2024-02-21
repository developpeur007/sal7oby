import './Progressbar.css'

function Progressbar(props) {
  return (
    <div className="skill-box">
      <div className="top">

        <span className="title">{props.name}</span>
        <span className="toolti">{props.now}%</span>
      </div>
        <div className="skill-bar">
          <span className={`skill-per ${props.class}`}>
            
          </span>
        </div>

      </div>
  )
}

export default Progressbar
