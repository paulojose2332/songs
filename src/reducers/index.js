import { combineReducers } from 'redux';


//ACTION HANDLERS/ REDUCERS

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Sound of Silence', duration: '5:03'},
        {title: 'I want it that way' , duration: '3,17'},
        {title: 'Wind of change', duration: '6:27'}
    ];
};

const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }; 
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});