import {v1} from "uuid";
import {AllActionType, ProfilePageType} from "./store";

export type ActionAddPostType =
    {
        type: 'ADD-POST'
    }
export type ActionUpdatePostType =
    {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: string,
    }

let initialState: ProfilePageType={
    posts: [
        {id: v1(), message: "Hi!How are you?", likesCount: 2, srcImage: 'avatar.jpg'},
        {id: v1(), message: "It's very beautiful day", likesCount: 5, srcImage: 'avatar2.jpg'},
    ],
    newPostText: ''
}
export const profilePageReducer = (state=initialState, action: AllActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 77,
                srcImage: 'avatar.jpg'
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case "UPDATE-NEW-POST-TEXT":
            if (action.newText != null) {
                state.newPostText = action.newText;
                return state
            }
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const updatePostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export default profilePageReducer