import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { TextInput, toaster, FilePicker } from 'evergreen-ui';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import host from '../component/host';
const cookies = new Cookies();

class Addusers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: '',
      licenseDate: '',
      password: '',
      name: '',
      phone: '',
      info: '',
      file: [],
      date: '',
      startDate: new Date(),
      description: '',
      croczi_card: '200723011209'
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

    //    var date=moment(this.state.date).format("YYYY-MM-DD");
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("croczi_card", this.state.croczi_card);
    formData.append("password", this.state.password);
    formData.append("phone", this.state.phone);
    formData.append("location", this.state.location);
    formData.append("name", this.state.name);
    formData.append("file", this.state.file);
    //    formData.append("comp_id", comp_id);
    axios({
      url: host + `api/v1/user/register/`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('user has been added successfully');
        // console.log(response)
        window.location.reload();
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
            <div id='account'>Add Users</div></Col> </Row>
        <div id="form">
          <Row style={{ marginRight: '0px' }} className="justify-content-md-center" id="row1">
            <Col id='c2' sm="12" lg="6" >
              <div id='dd'>
                <p>password :</p>
                <TextInput id='width'
                  name="text-input-name"
                  type='password'
                  autocomplete='off'
                  placeholder="password"
                  required value={this.state.password} onChange={(e) => {
                    this.setState({ password: e.target.value })
                  }} />
              </div>
              <div id='dd'>
                <p> Name :</p>
                <TextInput id='width'
                  name="text-input-name"
                  autocomplete='off'
                  placeholder="User Name"
                  required value={this.state.name} onChange={(e) => {
                    this.setState({ name: e.target.value })
                  }}
                />
              </div>
              <div id='dd'>
                <p>Card number :</p>
                <TextInput
                  name="text-input-name" id='width'
                  placeholder="card number"
                  type='number'
                  autocomplete='off'
                  required value={this.state.croczi_card} onChange={(e) => {
                    this.setState({ croczi_card: e.target.value })
                  }} />

              </div>


            </Col>
            <Col id='cc' sm="12" lg="6" >
              <div id='d1'>
                <p>Phone:</p>
                <TextInput id='width'
                  name="text-input-name"
                  placeholder="phone"
                  type='number'
                  autocomplete='off'
                  required value={this.state.phone} onChange={(e) => {
                    this.setState({ phone: e.target.value })
                  }} />
              </div>
              <div id='d1'>
                <p>location :</p>
                <TextInput
                  name="text-input-name" id='width'
                  placeholder="location"
                  autocomplete='off'
                  required value={this.state.location} onChange={(e) => {
                    this.setState({ location: e.target.value })
                  }} />
              </div>
              <div id='d1'>
                <p >Photo :</p>
                <FilePicker id='width' multiple onChange={files =>
                  this.setState({ file: files[0] })
                } />
              </div>
            </Col>
          </Row>
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

export default Addusers;
