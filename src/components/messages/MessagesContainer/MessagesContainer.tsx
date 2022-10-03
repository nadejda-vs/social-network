import React from 'react'
import {Messages} from "./Messages/Messages";
import {store, StoreType} from "../../../redux/store";
import {addMessagesActionCreator, updateMessagesActionCreator} from "../../../redux/messagePage-reducer";

type PropsMessagesType = { store: StoreType }


export const MessagesContainer = (props: PropsMessagesType) => {

    let state = store.getState().messagesPage

    const addMessages = () => {
        props.store.dispatch.bind(props.store)(addMessagesActionCreator())
    }

    const updateMessages = (body: string) => {
        if (body) {
            props.store.dispatch.bind(props.store)(updateMessagesActionCreator(body))
        }
    }

    return (
        <Messages messages={state.messages}
                  updateMessages={updateMessages}
                  addMessages={addMessages}
                  newMessageText={state.newMessageText}/>
    )
}