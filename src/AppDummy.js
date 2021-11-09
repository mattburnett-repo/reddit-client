import Filter from './components/Filter.js';
import Search from './components/Search.js';
import Listings from './components/Listings.js';

import logo from './logo.svg';
import './App.css';

export default function AppDummy() {    
  return (                                                
    <div className="App">
      <header className="App-header">
        <div className="headerLeftText">REDDIT</div> 
        <img src = {logo} className="App-logo" alt="logo" /> 
        <div className="headerRightText">CLIENT</div>
      </header>
      
      <section className="filterSearch">  
        <Filter className="filter"/> 
        <Search className="search"/>
      </section>

      <section className="listings">
        <Listings />
      </section>
    </div>
  );
};
