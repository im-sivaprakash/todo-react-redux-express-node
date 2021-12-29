import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { useAppSelector } from '../app/hooks/useAppSelector'
import Card from '../Components/Card'
import HeaderBar from '../Components/HeaderBar'
import NavBar from '../Components/NavBar'
import { getTodo, todoSelector } from '../Store/todoSlice'


function Completed() {


    const dispatch = useAppDispatch();
    const allTodo = useAppSelector(todoSelector);
    


    useEffect(() => {
        dispatch(getTodo());
    },[dispatch])


    return (
        <div>
           <HeaderBar isCompleted={true}/>
           <NavBar/>
           <Card data={allTodo.filter((todo: any)=> todo.completed)}/> 
        </div>
    )
}

export default Completed
