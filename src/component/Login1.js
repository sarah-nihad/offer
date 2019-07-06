import React, { Component } from 'react';
import './task.css';
import { TextInput, FilePicker, Button, toaster } from 'evergreen-ui';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import host from './host';
 const cookies =new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      mail: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date
    }); }
  login(e) {
    e.preventDefault()
    axios.post(host + `api/v1/admin/login`, {
      email: this.state.mail,
      password: this.state.pass
    })

      .then(response => {
        // if (response === 200) {
          window.location.href = '/Home'
          cookies.set("token",response.data.token,{
            path:'/',
            expires:new Date(Date.now() + 60480000)
          }
          );
        // }
      })
      .catch(function (error) {
        console.log(error.response.data)
      });
  }
  render() {
    return (
    <div id='rrlogin'>
       {/* <div> */}
        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="colimg" xs={12} md={12} lg={12}>
            <img src={require('./poerd by.png')} id="img" />
          </Col></Row>


     
        <div id='fff' >
        {/* <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <img src={require('./d.jpg')} id="imglog" />

          </Col> </Row>  */}
          <Row style={{ marginRight: '0px' }} className="justify-content-md-center" >
            <Col id='c3' sm="12" md="6" >
              
              <form>
               
<div id='loginame'>
<img src={require('./d.jpg')} id="imglog" />
                  <p></p>
                  <TextInput
                    name="text-input-name"
                    placeholder="email"
                    required value={this.state.mail} 
                    onChange={(e) => {
                      this.setState({ mail: e.target.value })
                    }} />
              
            
              
                  <p></p>
                  <TextInput id='oooo'
                    name="text-input-name"
                    placeholder="Password" required
                    value={this.state.pass}
                    onChange={(e) => {
                      this.setState({ pass: e.target.value })
                    }} />
  </div>
             
                <div id='login'>
                <Button appearance="" intent="warning" id='blogin'
                  onClick={(e) => {
                    this.login(e)

                  }}
                >Login</Button></div>

                
                  {/* <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id="t1"  >
            <Link to='./Home
             ' ><Button appearance="primary" intent="warning" id='bbb'
                // onClick={() => this.login()}
              >Login</Button> </Link> 
            </Col> </Row> */}
              </form>
            </Col></Row>

        

        </div> </div>
    );
  }
}
export default Login;



