import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { useAppSelector } from '../app/hooks/useAppSelector'
import AddBar from '../Components/AddBar'
import Card from '../Components/Card'
import HeaderBar from '../Components/HeaderBar'
import NavBar from '../Components/NavBar'
import PopupBox from '../Components/PopupBox';
import { getTodo, todoSelector } from '../Store/todoSlice'


const  Home = () =>{
    
const [editData, setEditData] =  useState<any>();
const [popUpControl,setPopUpControl]=  useState(false);

const dispatch = useAppDispatch()
const allTodo = useAppSelector(todoSelector)

useEffect(() => {
    dispatch(getTodo());
},[dispatch])

    return (
        <div>
            <HeaderBar isCompleted={false}/>
            <NavBar/>
            <Card data={allTodo} controlPopup={setPopUpControl} editData={setEditData}/>
            { popUpControl ?
                <PopupBox isOpen={popUpControl} controlPopup={setPopUpControl} data={editData} />
                : <></>
            }
            <AddBar/>
        </div>
    )
}
       
export default Home