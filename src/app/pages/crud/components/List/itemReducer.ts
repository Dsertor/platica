import { item } from "./List";


type actions = {
    type: string,
    payload: item
}

export const itemReducer = (state: item[], action: actions): item[] =>{
    switch(action.type){

        case 'addItem':
            return [...state, {id: action.payload.id, name: action.payload.name}]

        case 'deleteItem':
            return state.filter(item => item.name !== action.payload.name)


















        default:
            return state;
    }
}