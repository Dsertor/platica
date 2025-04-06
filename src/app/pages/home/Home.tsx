import { JSX } from "react";
import style from "./home.module.css";
import { Item } from "./components/item/Item";

const nameSections = ["Strings", "calculator"];

export const Home = (): JSX.Element => {
    return (
        <>
            <h1 className={`${style.title} `}>Contenido</h1>
            <section className={`${style.sections} `}>
                {nameSections.map((section) => (
                    <Item key={section} name={section} />
                ))}
            </section>
        </>
    );
};
