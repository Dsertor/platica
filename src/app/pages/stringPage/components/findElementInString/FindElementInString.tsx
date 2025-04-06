import { ChangeEvent, JSX, useEffect, useState } from "react";

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
            setResult(value.charAt(position -1))
        }else{
            setResult('')
        }


    }, [position, value])


    return (
        <section>
            <input type="text" name="word" id="word" onChange={(event) => onChangeValue(event)} />
            <input type="number" name="position" id="position" onChange={(event) => takeLetterByPosition(event)}/>
            <p>{result}</p>
        </section>
    );
};
