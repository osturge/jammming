import './App.css';
import React from 'react';

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
