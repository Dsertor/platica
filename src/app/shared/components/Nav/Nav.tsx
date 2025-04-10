import { JSX } from "react"
import { NavLink, Outlet } from "react-router-dom"
import style from './nav.module.css';
import { NavButtons } from "../../../pages/stringPage/StringPage";


export const Nav = ({buttonsText}:  {buttonsText: NavButtons[]}): JSX.Element => {
  return (
    <div className={`${style.container} `}>
    <div>
        <h1 className={`${style.title} `}>Operaciones con strings</h1>
    </div>
    <section className={`${style.content} `}>
        <nav className={`${style.nav} `}>
            {buttonsText.map((element: NavButtons) => (
                <NavLink to={element.path} key={element.name} className={ ({isActive}: {isActive:boolean}) => isActive ? style.isActive : style.buttonElementContainer}>
                    <div className={`${style.buttonElement}`}>
                        {element.name}
                    </div>
                </NavLink>
            ))}
        </nav>
        <article className={`${style.navContent}`}>
            <Outlet />
        </article>
    </section>
</div>
  )
}
