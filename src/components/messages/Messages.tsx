import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";

export function Messages() {
    return (
        <MessagesStyled>
            <h6>Messages</h6>
            <DialogsContainerStyled>
                <UserName nameUser='Viktor' id='1'/>
               <ItemMessage content='How you are you?'/>
            </DialogsContainerStyled>
            {/*<DialogsContainerStyled>*/}
            {/*    <UserName nameUser='Alina' id={2}/>*/}
            {/*    <ItemMessage content='It is great!'/>*/}
            {/*</DialogsContainerStyled>*/}
        </MessagesStyled>
    )
}