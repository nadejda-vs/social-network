import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";

import {PostItem} from "./post/postItem";
import {StoreType} from "../../../../redux/store";

type PropsPostsType = { store: StoreType,
    addNewPost: () => void,
    onChangePostText: (text: string) => void }


export const MyPosts = (props: PropsPostsType) => {
    let state = props.store.getState().profilePage
    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const addPost= () => {
        props.addNewPost()
    }
    const onChangePost = () => {
        let text = newElementPost.current?.value
        if (text) {
            // store.dispatch.bind(store)(updatePostActionCreator(text))
            props.onChangePostText(text)
        }
    }
    return (
        <MyPostsStyled>
            My Posts
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        ref={newElementPost} value={state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add new Post</button>
                </div>
            </div>
            <div>
                {state.posts.map(p =>
                    <PostItem
                        key={p.id}
                        content={p.message}
                        likesCount={p.likesCount}
                        srcImage={p.srcImage}/>
                )}
            </div>
        </MyPostsStyled>
    )
}