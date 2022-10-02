import { createStore,combineReducers } from 'redux'
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagePage-reducer";


export const reducers = combineReducers(
    {
        profilePageReducer,
        messagesPageReducer
    }
);
export const store:any = createStore(reducers)