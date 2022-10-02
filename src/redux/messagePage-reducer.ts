import {v1} from "uuid";
import {AllActionType, MessagesPageType} from "./store";


export type ActionAddMessagesType =
    {
        type: 'ADD-MESSAGES'
    }
export type ActionUpdateMessagesType =
    {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText: string,
    }
let initialState: MessagesPageType = {
        messages: [
        {id: v1(), nameUser: 'Viktor', content: 'How you are you?'},
        {id: v1(), nameUser: 'Kate', content: 'It is a message'},
    ],
    newMessageText: '',
}

export  const messagesPageReducer = (state = initialState, action: AllActionType) => {

    switch (action.type) {
        case "ADD-MESSAGES":
            let newMessageText = {
                id: v1(),
                nameUser: state.newMessageText,
                content: state.newMessageText
            }
            state.messages.push(newMessageText);
            state.newMessageText = '';
            return state;

        case "UPDATE-MESSAGE-TEXT":
            if (action.newMessageText != null) {
                state.newMessageText = action.newMessageText;
                return state;
            }
            return state;

        default:
            return state;
    }
}

export const addMessagesActionCreator = () => ({type: 'ADD-MESSAGES'} as const)

export const updateMessagesActionCreator = (text: string) => {

    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText: text
    } as const
}

export default messagesPageReducer