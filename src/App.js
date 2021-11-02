// import logo from './ladderIcon_01.png';
import logo from './logo.svg';
import './App.css';

import Search from './components/search/Search.js';
import Filter from './components/filter/Filter.js';
import Items from './components/items/Items.js';

function App() {
  return (
    <div className="App">
      {/* 
          TODO: one line for larger screen, then reddit over logo over client
              for smaller screens
       */}
      <header className="App-header">
        <div className="headerLeftText">REDDIT</div> 
        <img src = {logo} className="App-logo" alt="logo" /> 
        <div className="headerRightText">CLIENT</div>
      </header>

      <section className="filterSearch">
        <Filter className="filter"/>
        <Search className="search"/>
      </section>

      <section className="items">
        <Items />
      </section>
    </div>
  );
}

export default App;
