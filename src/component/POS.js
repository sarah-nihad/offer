import React, { Component } from 'react'
import host from './host';
import axios from 'axios';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class POS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      password: '',
      phone: '',
      description: ''

    }
  }


  componentDidMount() {

    axios.get(host + 'api/v1/admin/pos', { headers: { token: cookies.get("token") } })
      .then(res1 => {
        this.setState({
          data: res1.data.pos
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })


  }


  render() {
    return (

      <Context.Consumer>{ctx => {
        return (
          <div >
            <div id="apfot">
              <Nav2 />
              <div id='most'>
                <div id='box'>
                  <img src={require('../assets/img/card.png')} id='imgress3' alt='img' />    نقاط البيع
               </div>
              </div>
              <div style={{ margin: '3%' }}>
                {this.state.data.map((item, i) =>
                  <div key={i} id='posmain'>

                    <div>
                      <img src={require('../assets/img/card.png')} style={{ height: '35px', marginRight: '5px' }} alt='img' />
                    </div>
                    <div id='postext'>
                      {item.description}
                    </div>

                  </div>
                )}


              </div>
            </div>
            <Foot1 />
          </div>

        )
      }}

      </Context.Consumer>
    );

  }
}
export default POS;