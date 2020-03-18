import React from 'react';
import './App.css';
import SearchView from './Components/SearchView';

function App() {
  // spells = spells.filter(s => s.name.toLowerCase().includes("mor".toLowerCase()));
  return (
    <div className="App">
      <SearchView />
    </div>
  );
}

export default App;
