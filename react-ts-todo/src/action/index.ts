import {Song} from "../reducer";

export interface AppAction {
    type: string;
    payload: object;
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