import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export type PostItemType={
    id:number
    message:string
    likesCount:number
    srcImage:string
}

export type MessageItemType={
    id:number
    nameUser:string
    content:string
}
export type PostsType=Array<PostItemType>
export type MessagesType=Array<MessageItemType>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let posts:PostsType= [
    {id: 1, message: "Hi!How are you?", likesCount: 2,srcImage:'avatar.jpg'},
    {id: 2, message: "It's very beautiful day", likesCount: 5,srcImage:'avatar2.jpg'},
];
let messages:MessagesType= [
    {id: 1,  nameUser:'Viktor',content:'How you are you?'},
    {id: 2,  nameUser:'Kate',content:'It is a message'},

];
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
