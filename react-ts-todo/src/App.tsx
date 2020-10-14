import React from 'react';
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const App: React.FC = () => {
    return (
        <div>
            <div>Hello!!!</div>
            <SongList/>
            <SongDetail/>
        </div>
    );
}

export default App;