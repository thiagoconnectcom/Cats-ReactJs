import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 


//Components
import Header from "./components/Header";

//Pages
import Home from './pages/Home';
import BigCat from './pages/BigCat';

export default function App() {
  return (
    <Fragment>
        <Router> 
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cat" component={BigCat} />
            </Switch>
        </Router>
     </Fragment> 
  );
}