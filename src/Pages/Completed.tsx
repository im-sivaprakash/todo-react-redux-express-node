import React from 'react'
import Card from '../Components/Card'
import HeaderBar from '../Components/HeaderBar'
import NavBar from '../Components/NavBar'
import  {staticData} from '../database'
function Completed() {
    return (
        <div>
           <HeaderBar isCompleted={true}/>
           <NavBar/>
           <Card data={staticData}/> 
        </div>
    )
}

export default Completed
