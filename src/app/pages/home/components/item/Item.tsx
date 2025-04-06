import { JSX } from "react";
import style from "./item.module.css";
import { Link } from "react-router-dom";

export const Item = (props: { name: string }): JSX.Element => {
    console.log(props.name);

    return (
        <Link to={props.name}>
            <div className={`${style.container} `}>
                <h2 className={`${style.title} `}>{props.name}</h2>
            </div>
        </Link>
    );
};
