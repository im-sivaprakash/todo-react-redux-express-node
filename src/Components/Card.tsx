import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './Card.module.scss'




interface cardPropInterface {
  controlPopup?: any;
  editData?: any | undefined;
  data: any;
}

const Card: React.FC<cardPropInterface> = ({ controlPopup, editData, data }) => {
  const path = useLocation().pathname;

   const deleteTask:any = (id: any) => {
    alert(id);
  }

  const changeTodoStatus:any =(id: any,isCompleted: boolean)  =>{
    console.log(id, isCompleted);
  }
  

  const editTask = (open:Boolean , content:string) => {   
    editData(content);
    controlPopup(open);
  }


  return <>
    <div className={style.cardView}>

      {
       
       data.map((todo: any) => {

       return  ((path === '/completed') && todo?.completed)
          ?
            <div className={style.card} key={todo.id}>
              <div className={style.optionHolder}>
                <button className={style.button} onClick={()=>changeTodoStatus(todo.id,false)}>
                  <i className="fas fa-undo-alt"></i>
                </button>
                <button className={style.button} onClick={()=>deleteTask(todo.id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <div className={style.content}>
                <div className={style.checkBoxHolder}>
                  <input type='checkbox' className={style.checkbox} />
                </div>
                <div className={style.contentHolder}>
                  <p>{todo.content}</p>
                </div>
              </div>
            </div> 
            :
            ((path === '/') && !todo?.completed) ?
            <div className={style.card} key={todo.id}>
              <div className={style.optionHolder}>
                <button className={style.button} onClick={() => editTask(true, todo.content)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button className={style.button} onClick={()=>deleteTask(todo.id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <div className={style.content}>
                <div className={style.checkBoxHolder}>
                  <input type='checkbox' className={style.checkbox} onChange={()=>changeTodoStatus(todo.id,true)}/>
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
