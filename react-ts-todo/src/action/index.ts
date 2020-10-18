import {Song} from "../reducer";
import taskAPI from "../api/taskAPI";
import {Action, Dispatch} from "redux";

const QUERY = '?token=token123';

export interface Task {
    title: string;
    content: string;
}

export interface AppAction {
    type: string;
    payload: object;
}

// たぶんclassで定義する
export interface FetchTasksAction {
    type: string;
    payload: { tasks: Task[] };
}

export const fetchTasks = () => async (dispatch: Dispatch<Action>) => {
    const response = await taskAPI.get(`/events${QUERY}`);

    dispatch({
        type: 'FETCH_TASKS',
        payload: {
            tasks: response.data
        }
    });
}

export const selectSongAction = (song: Song): AppAction => {
    return {
        type: 'SELECT_SONG',
        payload: {
            title: song.title,
            duration: song.duration
        }
    }
}