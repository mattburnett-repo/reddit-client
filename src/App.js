import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import Search from './components/Search.js';
import Filter from './components/Filter.js';
import Listings from './components/Listings.js';

import { requestAuth } from './stateManagement/authSlice.js';       
import { getListings } from './stateManagement/listingsSlice';  

import logo from './logo.svg';
import './App.css';

function App() {    
  const dispatch = useDispatch();

  // TODO: this should check if auth is expired before dispatch(requestAuth())
  //    useSelector(selectAuthIsExpired)
  //      but where to set it?
  // let expireEnd = useSelector(selectExpireEnd);
  // let authIsExpired = false;
  // if(expireEnd < Math.round(Date.now() / 1000)) {
  //   authIsExpired = true;
  //   console.log('App.loadData(): authTokenIsExpired');
  // } 

  async function loadData() { // add authIsExpired test
    await dispatch(requestAuth());
    await dispatch(getListings()); 
  }

  useEffect(() => {
    loadData();
  }, []);

  return (                                                // Switch and Routers go here?
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

      {/* Router / Switch goes here? */}
      <section className="listings">
        <Listings />
      </section>
    </div>
  );
}

export default App;
