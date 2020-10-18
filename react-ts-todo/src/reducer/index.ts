import {combineReducers} from "redux";
import {AppAction, FetchTasksAction, Task} from "../action";

export interface Song {
    title: string;
    duration: string;
}

const fetchTaskReducer = (tasks: Task[] = [], action: FetchTasksAction) => {
    if (action.type === 'FETCH_TASKS') {
        return action.payload.tasks;
    }

    return tasks;
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

// combineReducers を追加するたびにここをいじらないようにしたい
export interface AppState {
    songs: Song[];
    selected: Song;
    tasks: Task[];
}

export default combineReducers({
    songs: songsReducer,
    selected: selectedSongReducer,
    tasks: fetchTaskReducer
});