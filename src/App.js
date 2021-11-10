import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import Filter from './features/Filter.js';
import Search from './features/Search.js';
import Listings from './features/Listings.js';

import { requestAuth } from './stateManagement/authSlice.js';       
import { getListings } from './stateManagement/listingsSlice';  

import logo from './logo.svg';
import './App.css';

export default function App() {    
  const dispatch = useDispatch();

  async function loadData() { // add authIsExpired test
    await dispatch(requestAuth());
    await dispatch(getListings()); // no-arg defaults to '/', which I think is listings for '/best' on server side
  }

  useEffect(() => {
  // componentDidMount(() => {
    loadData();
  }, []); // TODO: Fix 'React Hook ... has a missing dependency' problem/warning

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
