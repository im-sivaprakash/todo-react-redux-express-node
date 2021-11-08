import React from 'react'
import  style from '../Components/HeaderBar.module.scss'

interface  HeaderBarInterface
{
  isCompleted : boolean
}

const HeaderBar: React.FC<HeaderBarInterface> = ({isCompleted}) => {
    return (
        <>
          <div className={style.header}>
           <h2 className={style.heading}>{ isCompleted ?  "Tasks you have done " : "TODO List " }</h2>
          </div> 
        </>
    )
}

export default HeaderBar
