import {combineReducers} from "redux";

export interface Song {
    title: string;
    duration: string;
}

const songsReducer = (): Song[] => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want It That Way', duration: '1:45'},
    ];
};

export interface AppState {
    songs: Song[]
}

export default combineReducers({
    songs: songsReducer
});