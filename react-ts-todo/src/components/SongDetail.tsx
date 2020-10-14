import React from 'react';
import {connect} from "react-redux";
import {AppState, Song} from "../reducer";

interface SongProps {
    song: Song;
}

const SongDetail: React.FC<SongProps> = (props) => {
    if(!props.song){
        return <div>No Select</div>
    }

    return <div>{props.song.title}</div>
}

const mapStateToProps = (state: AppState) => {
    return {song: state.selected}
}

export default connect(mapStateToProps)(SongDetail);