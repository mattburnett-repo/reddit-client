import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; // can also use useSelector()

import Search from './components/search/Search.js';
import Filter from './components/filter/Filter.js';
import Listings from './components/listings/Listings.js';

import { requestAuth } from './components/auth/authSlice.js';       // actions from the slice
import { getListings } from './components/listings/listingsSlice';  // actions from the slice

import logo from './logo.svg';
import './App.css';

function App() {    // Switch and Routers goe here?
  
  const dispatch = useDispatch();

  //  get auth token on first render / reload
  //    TODO: this really needs some error checking, here and also in the actions
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
