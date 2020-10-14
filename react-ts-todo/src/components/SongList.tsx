import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppState, Song} from "../reducer";

interface SongListProps {
    songs: Song[];
}

class SongList extends Component<SongListProps> {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div key={song.title}>
                    <div className="content">
                        <span>{song.title}  </span>
                        <span><button className="ui button primary">Select</button></span>
                    </div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state: AppState) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);