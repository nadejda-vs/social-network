import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";
import {
    MessagesType,
} from "../../../../redux/store";


type PropsMessagesType = {
    messages: MessagesType, newMessageText: string,
    updateMessages: (message: string) => void
    addMessages: () => void
}


export const Messages = (props: PropsMessagesType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        props.addMessages()
    }
    const onChangeMessageText = () => {
        let message = newMessageElement.current?.value
        if (message) {
            props.updateMessages(message)
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