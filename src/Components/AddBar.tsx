import React from 'react'
import style from './AddBar.module.scss'

function AddBar() {

    const addTask = (e:any)=>{
    
        e.preventDefault();
        alert(e.target.todo.value);
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
