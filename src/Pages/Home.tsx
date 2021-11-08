import React, { useState } from 'react'
import AddBar from '../Components/AddBar'
import Card from '../Components/Card'
import HeaderBar from '../Components/HeaderBar'
import NavBar from '../Components/NavBar'
import PopupBox from '../Components/PopupBox';
import {staticData} from '../database'


const  Home = () =>{
    
const [editData, setEditData] =  useState("");
const [popUpControl,setPopUpControl]=  useState(false);


    
    return (
        <div>
            <HeaderBar isCompleted={false}/>
            <NavBar/>
            <Card data={staticData} controlPopup={setPopUpControl} editData={setEditData}/>
            { popUpControl ?
                <PopupBox isOpen={popUpControl} controlPopup={setPopUpControl} data={editData}  editData={setEditData} />
                : <></>
            }
            <AddBar/>
        </div>
    )
}
       
export default Home