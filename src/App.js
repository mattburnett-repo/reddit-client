import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import Search from './components/search/Search.js';
import Filter from './components/filter/Filter.js';
import Listings from './components/listings/Listings.js';

import { requestAuth } from './components/auth/authSlice.js';       
import { getListings, selectIsLoading } from './components/listings/listingsSlice';  

import logo from './logo.svg';
import './App.css';

function App() {    // Switch and Routers go here?
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // TODO: this should check if auth is expired before dispatch(requestAuth())
  //    useSelector(selectAuthIsExpired)
  //      but where to set it?

  // TODO: implement 'isLoading' message/display

  async function loadData() { // add isLoading test/display
    await dispatch(requestAuth());
    await dispatch(getListings()); 
  }

  useEffect(() => {
    loadData();
  }, []);

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
