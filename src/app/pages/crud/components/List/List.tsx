import { JSX, useReducer, useRef } from "react";
import style from "./list.module.css";
import { itemReducer } from "./itemReducer";

export type itemList = {
    id: number,
    name: string
}

const initialState: itemList[] = []

export const List = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [state, dispatch] = useReducer(itemReducer, initialState)

    const handleAddItem = (value: string | undefined) =>{
        if(!value) return
        const id = state.length + 1;
        dispatch({type: 'addItem', payload: {id, name: value}})
    }

    return (
        <div>
            <input type="text" name="addList" id="addList" className={`${style.itemInput}`} ref={inputRef} />
            <button onClick={() => handleAddItem(inputRef.current?.value)}>Añadir</button>
            {state.map((item) => (<div key={item.id}>{item.name}</div>))}
        </div>
    );
};
