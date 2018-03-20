import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';
const API_KEY = 'AIzaSyBLp4faH4-YGNMIRyPF1APVc34HViMC3Rk';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term)}, 300)

    return (
      <div className="App">
        <h1>Youtube Clone</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
