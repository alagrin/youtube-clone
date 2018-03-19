import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
const API_KEY = 'AIzaSyBLp4faH4-YGNMIRyPF1APVc34HViMC3Rk';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      videos: [] 
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Time!</h1>
        <SearchBar />
        <Button>
          Submit
        </Button>
      </div>
    );
  }
}

export default App;
