
export type PostItemType={
    id:number
    message:string
    likesCount:number
    srcImage:string
}

export type MessageItemType={
    id:number
    nameUser:string
    content:string
}
export type PostsType=Array<PostItemType>
export type MessagesType=Array<MessageItemType>
export type StateType={
    profilePage:{ posts:PostsType},
    messagesPage:{ messages:MessagesType}
}
export const state:StateType ={
    profilePage:{
        posts:[
    {id: 1, message: "Hi!How are you?", likesCount: 2,srcImage:'avatar.jpg'},
    {id: 2, message: "It's very beautiful day", likesCount: 5,srcImage:'avatar2.jpg'},
]},
    messagesPage:{  messages: [
        {id: 1,  nameUser:'Viktor',content:'How you are you?'},
        {id: 2,  nameUser:'Kate',content:'It is a message'},

    ]}
}