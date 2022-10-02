import {v1} from "uuid";
import profilePageReducer, {ActionAddPostType, ActionUpdatePostType} from "./profilePage-reducer";
import messagesPageReducer, {ActionAddMessagesType, ActionUpdateMessagesType} from "./messagePage-reducer";

export type PostItemType = {
    id: string
    message: string
    likesCount: number
    srcImage: string
}

export type MessageItemType = {
    id: string
    nameUser: string
    content: string
}
export type PostsType = Array<PostItemType>

export type MessagesType = Array<MessageItemType>

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type ProfilePageType = {
    posts: PostsType, newPostText: string

}
export type  MessagesPageType = {
    messages: MessagesType, newMessageText: string

}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    subscribe: (observer: any) => void,
    _callSubscriber: (observer: any) => void,
    dispatch: (action: AllActionType) => void,
}
export type  AllActionType = ActionAddMessagesType | ActionUpdateMessagesType | ActionAddPostType | ActionUpdatePostType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi!How are you?", likesCount: 2, srcImage: 'avatar.jpg'},
                {id: v1(), message: "It's very beautiful day", likesCount: 5, srcImage: 'avatar2.jpg'},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: v1(), nameUser: 'Viktor', content: 'How you are you?'},
                {id: v1(), nameUser: 'Kate', content: 'It is a message'},
            ],
            newMessageText: '',
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
      this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    }
}


