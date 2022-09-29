import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {store, } from "./redux/state";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

 export const rerender = (state: any) => {
    return root.render(<App posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            messages={state.messagesPage.messages}
                            newMessageText={state.messagesPage.newMessageText}/>)
}

rerender(store.getState())
// subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


