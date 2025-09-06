
import logo from '/1.png'


export default function Header () {
  const now = new Date()
    return(
  <header>
    
  <img alt src={logo} width="50" height="50"></img>
  {/*<h3>Frontend developer</h3>*/ }

  <span>Time rihgt now: {now.toLocaleTimeString()}  </span>
  
  </header>
    )
  }