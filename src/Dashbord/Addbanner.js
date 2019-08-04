import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { TextInput, toaster, FilePicker } from 'evergreen-ui';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import host from '../component/host';
const cookies = new Cookies();

class Addbanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], email: '',
      type: '', licenseDate: '',

      name: '',
      pass: '',
      pass1: '',
      phone: '',
      mail: '',
      page: '',
      file: [],
      date: '',
      startDate: new Date(),
      rest: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date
    });
  }
  login() {


    var name = this.state.name;
    var description = this.state.description;
    var phone = this.state.phone;
    var mail = this.state.mail;
    var file = this.state.file;
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };


    formData.append("email", mail);
    //    formData.append("password", pass);
    formData.append("phone", phone);
    formData.append("description", description);
    formData.append("name", name);
    formData.append("file", file);
    //    formData.append("comp_id", comp_id);
    axios({
      url: host + `api/v1/banner/add`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Banner has been added successfully');
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }



  render() {
    return (




      <div id='rr'>
        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="colimg" xs={12} md={12} lg={12}>
            {/* <img src={require('./poerd by.png')} id="im" /> */}
          </Col></Row>
        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            {/* <img src={require('./ss.png')} id="tab" />  */}

          </Col> </Row>

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'>Add Banner</div></Col> </Row>
        <div id="form">

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center" id="row1">
            <Col id='c2' sm="12" lg="6" >


              <div id='dd'>

                <p>Email :</p>
                <TextInput id='width'
                  name="text-input-name"
                  placeholder="email"
                  required value={this.state.mail} onChange={(e) => {
                    this.setState({ mail: e.target.value })
                  }} />
              </div>




              <div id='dd'>
                <p> Name :</p>
                <TextInput id='width'
                  name="text-input-name"
                  placeholder="User Name"
                  required value={this.state.name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                  }}
                />

              </div>





            </Col>
            <Col id='cc' sm="12" lg="6" >



              {/* <div id='d1'>
      <p>Password :</p>
<TextInput id='ooo' 
  name="text-input-name"
  placeholder="Password"  required
  value={this.state.pass} onChange={(e)=>{
    this.setState({pass:e.target.value})
      }} />
      </div> */}
              <div id='d1'>
                <p>Phone:</p>
                <TextInput id='width'
                  name="text-input-name"
                  placeholder="phone"
                  required value={this.state.phone} onChange={(e) => {
                    this.setState({ phone: e.target.value })
                  }} />
              </div>

              <div id='d1'>
                <p >Insert Logo :</p>
                <FilePicker id='width'
                  multiple


                  onChange={files =>
                    this.setState({ file: files[0] })
                  }
                />
              </div>






            </Col>

          </Row>

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id="t11" sm={12} >
              <div id='d3'>








                <p>description :</p>
                <TextInput
                  name="text-input-name" id='width'
                  placeholder="description"
                  required value={this.state.description} onChange={(e) => {
                    this.setState({ description: e.target.value })
                  }} />










              </div>


            </Col> </Row>



          <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id="t1" >
              <Button variant="outline-danger" id='blogin'
                onClick={() => this.login()}>Save</Button>
            </Col> </Row>



        </div>



      </div>



    );
  }
}

export default Addbanner;
