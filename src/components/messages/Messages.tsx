import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";
import {MessagesType, store} from "../../redux/state";

type PropsMessagesType = { messages: MessagesType, newMessageText: string }

export function Messages(props: PropsMessagesType) {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addNewMessage = () => {
        store.addMessageText()
    }
    const onChangeMessageText = () => {
        let message = newMessageElement.current?.value
        store.updateMessageText(message as string)
    }
    return (
        <MessagesStyled>
            <h6>Messages</h6>
            <DialogsContainerStyled>
                {props.messages.map(p =>
                    <>
                        <UserName nameUser={p.nameUser} id={p.id} key={p.id}/>
                        <ItemMessage content={p.content}/>
                    </>
                )}
            </DialogsContainerStyled>
            <textarea ref={newMessageElement} onChange={onChangeMessageText} value={props.newMessageText}/>
            <button onClick={addNewMessage}>Add new message</button>
        </MessagesStyled>
    )
}