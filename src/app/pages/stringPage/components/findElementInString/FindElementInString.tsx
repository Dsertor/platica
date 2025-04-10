import { ChangeEvent, JSX, useEffect, useState } from "react";

import style from './findElementInString.module.css';

export const FindElementInString = (): JSX.Element => {
    const [value, setValue] = useState<string>("");
    const [position, setPosition] = useState<number>(0);
    const [result, setResult] = useState('')

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>):void => {
        setValue(event.target.value);
    };

    const takeLetterByPosition = (event: ChangeEvent<HTMLInputElement>):void =>{
        setPosition(Number(event.target.value));
    }

    useEffect(() => {
        if(value !== '' && position >= 1 && position <= (value.length -1)){
            setResult(`Posición en ${position}: ${value.charAt(position -1)}`)
        }else{
            setResult('Valor no válido')
        }


    }, [position, value])


    return (
        <section className={`${style.inputContainer} `}>
            <input type="text" name="word" id="word" onChange={(event) => onChangeValue(event)} className={`${style.wordInput} `}/>
            <input type="number" name="position" id="position" onChange={(event) => takeLetterByPosition(event)} className={`${style.worldPosition} `}/>
            <p className={`${style.resultBox} `}>{result}</p>
        </section>
    );
};
