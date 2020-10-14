import {combineReducers} from "redux";
import {AppAction} from "../action";

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

// selectedを null もしくは Song型で指定したい
const selectedSongReducer = (selected = null, action: AppAction) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selected;
}

export interface AppState {
    songs: Song[];
    selected: Song;
}

export default combineReducers({
    songs: songsReducer,
    selected: selectedSongReducer
});