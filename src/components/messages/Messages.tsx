import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";
import {
    addMessagesActionCreator,
    MessagesType,
    store,
    updateMessagesActionCreator,
} from "../../redux/state";

type PropsMessagesType = { messages: MessagesType, newMessageText: string }

export function Messages(props: PropsMessagesType) {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {store.dispatch.bind(store)(addMessagesActionCreator())}
    const onChangeMessageText = () => {
        let message = newMessageElement.current?.value
        if (message){
            let action = updateMessagesActionCreator(message)
            store.dispatch.bind(store)(action)
        }

    }
    return (
        <MessagesStyled>
            <h6>Messages</h6>
                {props.messages.map(p =>
                    <DialogsContainerStyled  key={p.id}>
                        <UserName nameUser={p.nameUser} id={p.id}/>
                        <ItemMessage content={p.content}/>
                    </DialogsContainerStyled>
                )}
            <textarea ref={newMessageElement} onChange={onChangeMessageText} value={props.newMessageText}/>
            <button onClick={addNewMessage}>Add new message</button>
        </MessagesStyled>
    )
}