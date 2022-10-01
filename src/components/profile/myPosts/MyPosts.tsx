import React from 'react'
import {MyPostsStyled} from "./myPosts.styled";
import {PostsType, store,} from "../../../redux/store";
import {PostItem} from "./post/postItem";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePage-reducer";

type PropsPostsType = { posts: PostsType, newPostText: string }


export function MyPosts(props: PropsPostsType) {

    let newElementPost = React.createRef<HTMLTextAreaElement>()
    const addNewPost = () => {
        store.dispatch.bind(store)(addPostActionCreator())
    }
    const onChangePost = () => {
        let text = newElementPost.current?.value
        if (text) {
            store.dispatch.bind(store)(updatePostActionCreator(text))
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