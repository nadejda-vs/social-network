import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {AppWrappersStyled} from "./app.styled";

function App() {
    return (
        <AppWrappersStyled>
            <Header/>
            <Navbar />
            <Profile />
        </AppWrappersStyled>
    );
}

export default App;
