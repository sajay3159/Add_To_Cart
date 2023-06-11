import {ADD_TO_CART} from '../Constant';
const initialState = {
    cardData: []
}

export default function cardItems(state=initialState,action)
{
    switch(action.type){
        case ADD_TO_CART:
            console.log('reducer',action);

            let d = [...state.cardData];

            d.push(action.data);
            return{
                ...state,
                cardData: d
            }
            // break;
            default:
                return state
    }
}