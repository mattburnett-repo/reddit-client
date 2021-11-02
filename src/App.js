// import logo from './logo.svg';
import './App.css';

import Search from './components/search/Search.js';
import Filter from './components/filter/Filter.js';
import Items from './components/items/Items.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        logo image
      </header>
      <Search />
      <Filter />
      <Items />
    </div>
  );
}

export default App;
