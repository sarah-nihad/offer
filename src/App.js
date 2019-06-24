import React, { Component } from 'react';

import Login from './component/Login';
import Nav2 from './component/Nav2';
import Slide1 from './component/Slide1';
import Popular from './component/Popular';
import Global from './component/Global';
import Foot1 from './component/Foot1';

import Recommend  from './component/Recommend';
import Profile from './component/Profile';
import Visited from './component/Visited';
import {BrowserRouter,Route} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }
  render() {
    return (
    <div>
       <div id="apfot">
     
      {/* <Slide1 /> */}
<BrowserRouter>
 <Nav2 />
 
 <Route exact path ='/' component={Slide1} />  
 <Route exact path ='/' component={Popular} />
 <Route exact path ='/' component={Global} />
<Route path ='/Login' component={Login} /> 
<Route exact path ='/' component ={Recommend } />
<Route exact path ='/Profile' component ={Profile } />
<Route exact path ='/' component ={Visited } />
</BrowserRouter>
</div>
<Foot1 />

    </div>
         
          
            
       
       
    );
  }
}

export default App;
