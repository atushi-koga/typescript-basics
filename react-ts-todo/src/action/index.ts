import {Song} from "../reducer";

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

export const fetchTasks = (): FetchTasksAction => {
    // APIを実行してタスクを取得、payloadに含める


    return {
        type: 'FETCH_TASKS',
        payload: {
            tasks: [
                {title: 'test1', content: 'content1'},
                {title: 'test2', content: 'content2'}
            ]
        }
    }
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