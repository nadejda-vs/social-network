import React from 'react'

import { StoreType,} from "../../../redux/store";

import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./myPosts/MyPosts";

type PropsPostsType = {
    store: StoreType,
}


export const MyPostsContainer = (props: PropsPostsType) => {

    const addNewPost = () => {
        props.store.dispatch.bind(props.store)(addPostActionCreator())
    }
    const onChangePostText = (text: string) => {

        if (text) {
            props.store.dispatch.bind(props.store)(updatePostActionCreator(text))
        }
    }
    return <MyPosts store={props.store} addNewPost={addNewPost} onChangePostText={onChangePostText}/>

}