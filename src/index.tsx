import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {store} from "./redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerender = (state: any) => {
    return root.render(
        <App
            store={store}/>)
}

rerender(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})
// subscribe(rerender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


