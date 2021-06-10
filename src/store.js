import { createStore,combineReducers } from "redux";
import { incrementDecrementReducer } from "./reducers/incrementDecrementReducer";


//const rootReducer=combineReducers({data:incrementDecrementReducer});
export const store=createStore(incrementDecrementReducer);