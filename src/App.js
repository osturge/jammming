import './App.css';
import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import Playlist from './Playlist.js';

function App() {
  return (
    <div className="App">
      <h1>Your Spotify Playlist App</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
