import {ADD_TO_CART} from '../Constant';
 const addToCart = (data)=>{
    console.log("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export default addToCart;