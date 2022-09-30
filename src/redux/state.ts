import {v1} from "uuid";

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
    profilePage: { posts: PostsType, newPostText: string },
    messagesPage: { messages: MessagesType, newMessageText: string }
}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    subscribe: (observer: any) => void,
    _callSubscriber: (observer: any) => void,
    dispatch: (action: ActionType) => void,
}
export type ActionType =
    {
        type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'ADD-MESSAGES' | 'UPDATE-MESSAGE-TEXT',
        newText?: string,
        newMessageText?: string,
    }


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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 77,
                srcImage: 'avatar.jpg'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.newText != null) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }

        } else if (action.type === 'ADD-MESSAGES') {
            let newMessageText = {
                id: v1(),
                nameUser: this._state.messagesPage.newMessageText,
                content: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessageText);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            if (action.newMessageText != null) {
                this._state.messagesPage.newMessageText = action.newMessageText;
                this._callSubscriber(this._state);
            }
        }
    }
}
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updatePostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const addMessagesActionCreator = () => ({type: 'ADD-MESSAGES'} as const)

export const updateMessagesActionCreator = (text: string) => {

    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText: text
    } as const
}