import { itemList } from "./List";

type actionType = {
    type: string,
    payload: itemList
}


export const itemReducer = (currentState: itemList[], action: actionType) =>{
    switch(action.type){
        case 'addItem':
            return [...currentState, {id: action.payload.id, name: action.payload.name}]





        default:
            return currentState;
    }
}