import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import Filter from './features/filter/Filter.js';
import Search from './features/search/Search.js';
import Listings from './features/listings/Listings.js';

import { requestAuth } from './features/auth/authSlice.js';       
import { getListings } from './features/listings/listingsSlice';  

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

      {/* TODO: Router / Links exact path to='/' listings and another path to='/comments'  */}
      <section className="listings"> 
        <Listings />
      </section>
    </div>
  );
};
