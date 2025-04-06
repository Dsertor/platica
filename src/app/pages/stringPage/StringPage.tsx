import { NavLink, Outlet } from "react-router-dom";
import style from "./stringPage.module.css";
import { JSX } from "react";

type NavButtons = {
    name: string;
    path: string;
};

const buttonText: NavButtons[] = [{ name: "Letra en una posición", path: "string-position" }];

export const StringPage = (): JSX.Element => {
    return (
        <div className={`${style.container} `}>
            <div>
                <h1 className={`${style.title} `}>Operaciones con strings</h1>
            </div>
            <section className={`${style.content} `}>
                <nav className={`${style.nav} `}>
                    {buttonText.map((element) => (
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
    );
};
