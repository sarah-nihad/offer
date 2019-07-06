import React, { Component } from 'react';
import Login1 from './component/Login1';
import Login from './component/Login';
import Context from './component/context';
import Si from './Dashbord/Si';

import Profile from './component/Profile';

import Maincard from './component/Maincard';
import axios from 'axios';
import host from './component/host';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {

      data: [],
      datas:[],
      data2: [],
      data3: [],
      data5:[],
      description: '',
      type_value: '',
      logo: '',
      category_id: '',
      rating: '',
      Image:'',

    }
  }


  componentDidMount() {


    axios.get(host + 'api/v1/card/new')
      .then(res => {
        console.log(res.data.new)
        this.setState({
          data: res.data.new
        })

      })
      .catch(err => {
        console.log('error:' + err);
      })

    axios.get(host + 'api/v1/card/special')
      .then(res => {
        console.log(res.data.hot_deal)
        this.setState({
          data3: res.data.hot_deal
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })
    axios.get(host + 'api/v1/recommend/')
      .then(res => {
        console.log(res.data.rec)
        this.setState({
          data2: res.data.rec
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })

      
      axios.get(host+'api/v1/cat/visited' )
      .then(res=>{console.log(res.data.visited)
        this.setState({
          data5:res.data.visited
        })
      })
      .catch(err=>{console.log('error:' + err);
      })

      axios.get(host+'api/v1/banner/' )
      .then(res=>{
        //console.log(res.data.banner)
        this.setState({
          datas:res.data.banner
        })
      })
      .catch(err=>{console.log('error:' + err);
      })

  }





  render() {
    return (
      <div>



        <BrowserRouter>
          <Context.Provider value={{
            value: this.state,
            action: {

            }
          }}>



            <Route exact path='/' component={Maincard} />

            <Route path='/Login' component={Login} />
            <Route path='/Login1' component={Login1} />
            <Route path='/Profile' component={Profile} />


            <Switch>
              <Route path='/Home' component={Si} />
              <Route path='/Addsection' component={Si} />
              <Route path='/Addcompany' component={Si} />
              <Route path='/Addbanner' component={Si} />
              <Route path='/Addrecomnd' component={Si} />
              <Route path='/Addprofile' component={Si} />
              <Route path='/Addcard' component={Si} />
              <Route path='/Resturant' component={Si} />
              <Route path='/Section1' component={Si} />
              <Route path='/Category1' component={Si} />
              <Route path='/Addusers' component={Si} />
              <Route path='/Allcard' component={Si} />
              <Route path='/Allbanner' component={Si} />
            </Switch>
          </Context.Provider>
        </BrowserRouter>



      </div>





    );
  }
}

export default App;
