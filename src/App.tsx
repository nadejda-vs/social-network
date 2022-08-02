import React from 'react';
import {Header} from "./components/header/Header";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header/>
            <Sidebar/>
            <Profile />
        </div>
    );
}

export default App;
