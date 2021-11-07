import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import Search from './components/Search.js';
import Filter from './components/Filter.js';
import Listings from './components/Listings.js';

import { requestAuth } from './stateManagement/authSlice.js';       
import { getListings } from './stateManagement/listingsSlice';  

import logo from './logo.svg';
import './App.css';

export default function App() {    
  const dispatch = useDispatch();

  async function loadData() { // add authIsExpired test
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

      {/* Switch and Routers go here? */}
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
