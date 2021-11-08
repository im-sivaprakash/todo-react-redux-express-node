import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import style from '../Components/NavBar.module.scss'


const NavBar = ()=> {

    const path = useLocation().pathname;
    

    return (
        <>
        <div className={style.nav}>
         <ul className={style.optionHolder}>
             <li className={style.option}>
                 <Link  to="/"  className={path==="/" ? style.active : ""} >
                     Todo
                 </Link>
                 
             </li>
             <li className={style.option}>
                 <Link  to="/completed" className={path==="/completed" ? style.active : ""} >
                     Completed
                 </Link></li>
         </ul>
        </div>
        </>
    )
}

export default NavBar
