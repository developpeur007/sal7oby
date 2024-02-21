import './Lang.css'

function Lang(props) {
  return (
    <>
    <div className='tous' >
        <div className='lang'>
        <img src={props.srcLang} alt={props.alt} className='ht'/>
        </div>
        <h4 className='lang-title'>{props.alt} : <span style={{color:props.txtcol}}>{props.level}</span></h4>
    </div>
      
    </>
  )
}

export default Lang
