import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {addPostActionCreator, PostsType, store, updatePostActionCreator} from "../../../redux/state";
import {PostItem} from "./post/postItem";

type PropsPostsType = { posts: PostsType, newPostText: string }

export function MyPosts(props: PropsPostsType) {

    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        store.dispatch.bind(store)(addPostActionCreator())
    }
    const onChangePost = () => {
        let text = newElementPost.current?.value
        if (text){
            let action=updatePostActionCreator(text)
                store.dispatch.bind(store)(action)
        }
    }
    return (
        <MyPostsStyled>
            My Posts
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        ref={newElementPost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add new Post</button>
                </div>
            </div>
            <div>
                {props.posts.map(p =>
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