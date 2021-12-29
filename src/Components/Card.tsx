import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { deleteTodo, todoStatusUpdate } from '../Store/todoSlice';
import style from './Card.module.scss'


interface cardPropInterface {
  controlPopup?: any;
  editData?: any | undefined;
  data: any;
}

const Card: React.FC<cardPropInterface> = ({ controlPopup, editData, data }) => {
  const path = useLocation().pathname;
  const dispatch = useAppDispatch();

  const deleteTask:any = (_id: any) => {
    dispatch(deleteTodo(_id));
  }

  const changeTodoStatus:any =(_id: any,isCompleted: any)  =>{
    dispatch(todoStatusUpdate({_id, isCompleted}))
  }
  
  const editTask = (open:Boolean , content:any) => {   
    editData({...content});
    controlPopup(open);
  }

  return <>
  <div className={style.cardView}>
   { 
      data?.map((todo: any) => {
       return  ((path === '/completed') && todo?.completed)
          ?
            <div className={style.card} key={todo._id}>
              <div className={style.optionHolder}>
                <button className={style.button} onClick={()=>changeTodoStatus(todo._id,false)}>
                  <i className="fas fa-undo-alt"></i>
                </button>
                <button className={style.button} onClick={()=>deleteTask(todo._id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <div className={style.content}>
                <div className={style.checkBoxHolder}>
                  {/* <input type='checkbox' className={style.checkbox} /> */}
                </div>
                <div className={style.contentHolder}>
                  <p>{todo.content}</p>
                </div>
              </div>
            </div> 
            :
            ((path === '/') && !todo?.completed) ?
            <div className={style.card} key={todo._id}>
              <div className={style.optionHolder}>
                <button className={style.button} onClick={() => editTask(true, {_id :todo._id,content: todo.content})}>
                  <i className="fas fa-pen"></i>
                </button>
                <button className={style.button} onClick={()=>deleteTask(todo._id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <div className={style.content}>
                <div className={style.checkBoxHolder}>
                  <input type='checkbox' className={style.checkbox} onChange={()=>changeTodoStatus(todo._id,true)}/>
                </div>
                <div className={style.contentHolder}>
                  <p>{todo.content}</p>
                </div>
              </div>
            </div> : <></>

        })
      }

    </div>

  </>
}

export default Card
