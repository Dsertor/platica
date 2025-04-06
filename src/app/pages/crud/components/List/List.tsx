import { JSX, useReducer, useRef } from "react";
import style from "./list.module.css";
import { itemReducer } from "./itemReducer";

export type item = {
    id?: number;
    name: string;
};

const initialState: item[] = [];

export const List = (): JSX.Element => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleNewItem = (name: string) => {
        const id = state.length + 1;
        dispatch({ type: "addItem", payload: { id, name } });
    };

    const handleDeleteItem = (item: string) => {
        dispatch({type: 'deleteItem', payload: {name: item}})
    };

    return (
        <div>
            <input type="text" name="addList" id="addList" className={`${style.itemInput}`} ref={inputRef} />
            <button onClick={() => handleNewItem(inputRef?.current?.value || "")}>Añadir</button>
            {state.map((item) => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => handleDeleteItem(item.name)}>Borrar</button>
                </div>
            ))}
        </div>
    );
};
