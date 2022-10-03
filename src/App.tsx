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
import { StoreType} from "./redux/store";
import {MessagesContainer} from "./components/messages/MessagesContainer/MessagesContainer";

type PropsPostsType = {
    store:StoreType
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
                               element={<Profile store={props.store}/>}/>
                        <Route path='/messages'
                               element={<MessagesContainer store={props.store}/>}/>
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
