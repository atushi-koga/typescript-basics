import React from 'react';
import {connect} from 'react-redux';
import {AppState, Song} from "../reducer";
import {AppAction, selectSongAction} from "../action";

interface SongListProps {
    songs: Song[];
    selectSongAction: (song: Song) => AppAction;
}

const SongList: React.FC<SongListProps> = props => {
    const renderList = props.songs.map(
        song => {
            return (
                <div key={song.title}>
                    <div className="content">
                        <span>{song.title} </span>
                        <span><button className="ui button primary" onClick={() => props.selectSongAction(song)}>Select</button></span>
                    </div>
                </div>
            );
        });

    return (
        <div className="ui divided list">{renderList}</div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSongAction})(SongList);