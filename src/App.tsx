import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {AppContentStyled, AppWrappersStyled} from "./app.styled";
import {News} from './components/news/News';
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {Messages} from "./components/messages/Messages";
import {MessagesType, PostsType} from "./redux/state";

type PropsPostsType = {
    posts: PostsType, newPostText: string,
    messages: MessagesType, newMessageText: string
}

function App(props: PropsPostsType) {
    return (
        <Router>
            <AppWrappersStyled>
                <Header/>
                <Navbar/>
                <AppContentStyled>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile newPostText={props.newPostText}
                                                 posts={props.posts}/>}/>
                        <Route path='/messages'
                               element={<Messages newMessageText={props.newMessageText}
                                                  messages={props.messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </AppContentStyled>
            </AppWrappersStyled>
        </Router>
    );
}

export default App;
