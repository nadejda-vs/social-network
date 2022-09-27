import {Rerender} from "../index";

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
export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi!How are you?", likesCount: 2, srcImage: 'avatar.jpg'},
            {id: 2, message: "It's very beautiful day", likesCount: 5, srcImage: 'avatar2.jpg'},
        ],
        newPostText: '',
    },
    messagesPage: {
        messages: [
            {id: 1, nameUser: 'Viktor', content: 'How you are you?'},
            {id: 2, nameUser: 'Kate', content: 'It is a message'},

        ],
        newMessageText: '',
    }
}

export const addPost = () => {
    let newPost = {id: 23, message: state.profilePage.newPostText, likesCount: 77, srcImage: 'avatar.jpg'}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    Rerender(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    Rerender(state)
}
export const addMessageText = () => {
    let newMessageText = {id: 2, nameUser: state.messagesPage.newMessageText, content: 'It is a message'}
    state.messagesPage.messages.push(newMessageText)
    state.messagesPage.newMessageText=''
    Rerender(state)
}
export const updateMessageText = (newMessage: string) => {
    state.messagesPage.newMessageText = newMessage
    Rerender(state)
}
