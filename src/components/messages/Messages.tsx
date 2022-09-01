import React from 'react'
import {DialogsContainerStyled, MessagesStyled} from "./messages.styled";
import {UserName} from "./UserName/UserName";
import {ItemMessage} from "./messageItem/ItemMessage";
import {MessagesType} from "../../redux/state";

type PropsMessagesType = { messages: MessagesType }

export function Messages(props:PropsMessagesType) {

    return (
        <MessagesStyled>
            <h6>Messages</h6>
            <DialogsContainerStyled>
                {props.messages.map(p=>
               <>
                   <UserName nameUser={p.nameUser} id={p.id} />
               <ItemMessage content={p.content}/>
                    </>
                    )}
            </DialogsContainerStyled>
                  </MessagesStyled>
    )
}