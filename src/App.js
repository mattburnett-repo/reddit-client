import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import Search from './components/search/Search.js';
import Filter from './components/filter/Filter.js';
import Listings from './components/listings/Listings.js';

import { requestAuth } from './components/auth/authSlice.js';       
import { getListings } from './components/listings/listingsSlice';  

import logo from './logo.svg';
import './App.css';

function App() {    // Switch and Routers go here?
  
  const dispatch = useDispatch();

  // TODO: this should check if auth is expired before dispatch(requestAuth())
  //    can't get it to work. more state access issues
  //      while researching this, came across references to Context. maybe Context is how to do this.
  //    related to login / auth processes. keep an eye open for this later in the course.
  //    trying to create production-ready code for what is really just a learning project...
  
  async function loadData() {
    await dispatch(requestAuth());
    await dispatch(getListings()); 
  }

  useEffect(() => {
    loadData();
  });

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
}

export default App;
