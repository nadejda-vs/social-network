import {rerender} from "../index";

export type PostItemType = {
    id: number
    message: string
    likesCount: number
    srcImage: string
}

export type MessageItemType = {
    id: number
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
    // addPost: () => void,
    // updateNewPostText: (newText: string) => void,
    // addMessageText: () => void,
    // updateMessageText: (newMessage: string) => void,
    subscribe: (observer: any) => void,
    rerender: () => void,
    dispatch: (action: ActionType) => void,

}
export type ActionType =
    {
        type?: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'ADD-MESSAGES' | 'UPDATE-MESSAGE-TEXT',
        newText?: any,
        newMessage?: any,
    }

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi!How are you?", likesCount: 2, srcImage: 'avatar.jpg'},
                {id: 2, message: "It's very beautiful day", likesCount: 5, srcImage: 'avatar2.jpg'},
            ],
            newPostText: ''
        },
        messagesPage: {
            messages: [
                {id: 1, nameUser: 'Viktor', content: 'How you are you?'},
                {id: 2, nameUser: 'Kate', content: 'It is a message'},

            ],
            newMessageText: '',
        }
    },
    getState() {
        return this._state;
    },
    rerender() {
        console.log('state changed')
    },
    // addPost() {
    //     let newPost = {id: 23, message: this._state.profilePage.newPostText, likesCount: 77, srcImage: 'avatar.jpg'}
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     rerender(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     rerender(this._state);
    // },
    // addMessageText() {
    //     let newMessageText = {id: 4, nameUser: this._state.messagesPage.newMessageText, content: 'It is a message'}
    //     this._state.messagesPage.messages.push(newMessageText);
    //     this._state.messagesPage.newMessageText = '';
    //     rerender(this._state);
    // },
    // updateMessageText(newMessage: string) {
    //     this._state.messagesPage.newMessageText = newMessage;
    //     rerender(this._state);
    // },
    subscribe(observer: any) {
        let rerender = observer;
        return rerender
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 23, message: this._state.profilePage.newPostText, likesCount: 77, srcImage: 'avatar.jpg'}
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            rerender(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            rerender(this._state);
        } else if (action.type === 'ADD-MESSAGES') {
            let newMessageText = {id: 4, nameUser: this._state.messagesPage.newMessageText, content: 'It is a message'}
            this._state.messagesPage.messages.push(newMessageText);
            this._state.messagesPage.newMessageText = '';
            rerender(this._state);
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage;
            rerender(this._state);
        }
    }
}