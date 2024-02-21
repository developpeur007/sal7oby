import './Theme.css'

function Theme(props) {
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
    const theme = () => {
        const selectedTheme = window.localStorage.getItem("selectedTheme")
        if (selectedTheme === "dark") {
          
          changeToLight()
        }else{
          changeToDark()

        }
  }
  return (
    <>
      <img src={props.srcImg} alt={props.name} className='toLight' id='theme' onClick={theme} />
    </>
  )
}

export default Theme
