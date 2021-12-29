import React from 'react'
import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { addTodo } from '../Store/todoSlice';
import style from './AddBar.module.scss'



function AddBar() {

    const dispatch = useAppDispatch();
    
    const addTask = (e:any)=>{
        e.preventDefault();
        const content:string = e.target.todo.value;
        dispatch(addTodo({content}))
        e.target.reset();
    }

    return (
        <>
        <div className={style.action}>
            <form onSubmit={addTask}>
              <input type="text" name="todo" placeholder="Get start with your TODOs..." className={style.addInput}/>
              <button type="submit" className={style.addButton}> 
              <i className="fas fa-plus"></i> </button>
            </form>
        </div>
        </>
    )
}

export default AddBar
