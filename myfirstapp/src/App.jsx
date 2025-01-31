import React from 'react'
import './App.css'
import Arrayaccess from './Arrayaccess'
import FirstComp from './propcontainer/FirstComp'
import SecondComp from './propcontainer/SecondComp'
import ThirdComp from './propcontainer/ThirdComp'
import FourthComp from './propcontainer/FourthComp'








function App() {
  return (
    <div className = "container">
       <FirstComp  />
       <SecondComp />
       <ThirdComp />
       <FourthComp />
       <Arrayaccess />
       
       
    </div>
  )
}

export default App