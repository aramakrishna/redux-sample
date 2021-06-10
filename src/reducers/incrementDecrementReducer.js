import {ActionTypes} from '../actions/actionTypes';

export  const stateData={
    balance_amount:0
};

//when we use export directly then in calling place import them like import {incrementDecrementReducer} from 'this file address without file extension' , see in stores.js how we consumed incrementReducer 
export const incrementDecrementReducer=(state=stateData,action)=>{
if (action.type===ActionTypes.INCREMENT) {
    return {balance_amount:state.balance_amount+1};
}
else if (action.type===ActionTypes.DECREMENT) {
    return {balance_amount:state.balance_amount-1}
}
return state;
}
