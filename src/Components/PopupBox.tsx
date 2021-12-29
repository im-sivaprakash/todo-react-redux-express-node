import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { todoContentUpdate } from '../Store/todoSlice';
import style from "./PopupBox.module.scss"

interface popUpProps
{
    data : any
    isOpen : boolean
    controlPopup: Function
}


const PopupBox: React.FC<popUpProps> = ({isOpen, data,  controlPopup}) => {
    const [popupData, setPopupData] = useState(data.content);
    const dispatch = useAppDispatch();

    const updateTodo = ()=>{
       dispatch(todoContentUpdate({_id: data._id,content : popupData}))
       controlPopup(!isOpen);
    }

    const updateValue = (taskContent: string)=>{
        setPopupData(taskContent)
    }

    return (
        <div className={style.window}>
            <div className={style.box}>
                <h4 className={style.heading}>Edit</h4>
                <button className={style.close} onClick={()=>controlPopup(!isOpen)}>
                     <i className="fas fa-close"></i>
                </button>
             <textarea className={style.content} defaultValue={popupData} onChange={(e)=>updateValue(e.target.value)} />
             <button className={style.updateBtn} onClick={()=>updateTodo()}>Update</button>
            </div>
        </div>
    )
}

export default PopupBox
