import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Filter from './features/filter/filter';
import Search from './features/search/search';
import Listings from './features/listings/listings';
import Comments from './features/comments/comments';

import logo from './logo.svg';
// import './reset.css';
import './App.css';

export default function App() {    
  return (       
    <Router>
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

        <Switch>
          <Route path="/" exact><Listings pathname=""/></ Route>
          <Route path="/best"><Listings pathname="best"/></ Route>
          <Route path="/controversial"><Listings pathname="controversial"/></ Route>
          <Route path="/hot"><Listings pathname="hot"/></ Route>
          <Route path="/new"><Listings pathname="new"/></ Route>
          <Route path="/rising"><Listings pathname="rising"/></ Route>
          <Route path="/top"><Listings pathname="top"/></ Route>

          {/* <Route path="/search"><Listings pathname="search"/></ Route> */}

          <Route path='/comments/:article_id' component={Comments} />
        </ Switch>
      </div>
    </Router>                                         
  );
};
