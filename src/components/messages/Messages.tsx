import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";
import {
    MessagesType,
    store,
} from "../../redux/store";
import {addMessagesActionCreator, updateMessagesActionCreator} from "../../redux/messagePage-reducer";


type PropsMessagesType = { messages: MessagesType, newMessageText: string }


export function Messages(props: PropsMessagesType) {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        store.dispatch.bind(store)(addMessagesActionCreator())
    }
    const onChangeMessageText = () => {
        let message = newMessageElement.current?.value
        if (message) {
            store.dispatch.bind(store)(updateMessagesActionCreator(message))
        }
    }

    return (
        <MessagesStyled>
            <h6>Messages</h6>
            {props.messages.map(p =>
                <DialogsContainerStyled key={p.id}>
                    <UserName nameUser={p.nameUser} id={p.id}/>
                    <ItemMessage content={p.content}/>
                </DialogsContainerStyled>
            )}
            <textarea ref={newMessageElement} onChange={onChangeMessageText} value={props.newMessageText}/>
            <button onClick={addNewMessage}>Add new message</button>
        </MessagesStyled>
    )
}