import React, { Component } from 'react';
import './task.css';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { TextInput, Select, Button, toaster, FilePicker, Pane, Dialog } from 'evergreen-ui';
import DatePicker from "react-datepicker";
import axios from 'axios';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Addprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      email: '',
      type: '',
      licenseDate: '',
      SelctCardName: 'Select',
      SelectCateName: 'Select',
      name: '',
      pass: (''),
      pass1: (''), phone: (''), mail: (''), page: ('')
      , file: []
      , date: (''), startDate: new Date(),
      rest: '', location: '', section_id: '',
      category_id: '',

      cards_id: '',
      allCate: [],
      wait: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.getCateById = this.getCateById.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date
    });
  }
  login() {
    var category_id = this.state.category_id;
    var cards_id = this.state.cards_id;
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("category_id", category_id);
    formData.append("cards_id", cards_id);
    axios({
      url: host + `api/v1/res/add`,
      method: "POST",
      data: formData,
      headers: headers
    }).then(response => {
      //delete the chosen item
      console.log(cards_id);
      console.log(this.state.data1)
      const filteredData = this.state.data1.filter(item => item._id !== cards_id)
      this.setState({
        data1:filteredData
      })

      //fetch 
      toaster.success('Profile has been added successfully');
      //console.log(response)
    })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  noti() {
    var category_id = this.state.category_id;
  
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("category_id",category_id);
   
    axios({
      url: host + `api/v1/cat/notification`,
      method: "POST",
      data: formData,
      headers: headers
    }).then(response => {
      //delete the chosen item
      console.log(this.state._id)
     

      //fetch 
      toaster.success('Notification has been send successfully');
      //console.log(response)
    })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }



  componentDidMount() {
    //  const Url=new URLSearchParams(window.location.search)
    //  const id=Url.get('category_id')

    axios.get(host + 'api/v1/cat/', { headers: { token: cookies.get("token") } })
      .then(res1 => {
        console.log(res1.data)
        this.setState({
          data: res1.data
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })











  }

 





  getCateById() {
    const { category_id } = this.state
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    console.log(this.state.category_id);

    axios.get(host + `api/v1/card/get/?category_id=${this.state.category_id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        //  console.log(res.data.cards)
        this.setState({
          data1: res.data.cards,
          wait: false
        })

      })
      .catch(err => {
        console.log('error:' + err);
      })
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
            {/* <img src={require('./ss.png')} id="tab" /> */}
          </Col> </Row>

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'>Add Profile</div></Col> </Row>
        <div id="form">

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center" id="row11">
            <Col id='t1pro' xm="12" >


              <div id='d1'>
                <p > category_id:</p>


                <Form.Group as={Col} controlId="formGridState" id='width'  >
                  {/* <Form.Label>State</Form.Label> */}
                  <Form.Control as="select" onChange={(e) => {
                    if (e.target.value !== 'select') {
                      console.log(e.target.value)
                      this.setState({ category_id: e.target.value })
                      setTimeout(() => {
                        this.getCateById()
                      }, 200);

                    }

                  }
                  }>
                    <option value={'select'}>Select id</option>
                    {this.state.data.map(((item ,i)=>


                      <option  key={i} value={item._id} key={item._id}    >{item.name}</option>

                    ))}
                  </Form.Control>
                </Form.Group>

              </div>












              {!this.state.wait ? (
                <div id='d1'>

                  <p > cards_id:</p>

                  <Form.Group as={Col} controlId="exampleForm.ControlSelect1" id='width' >

                    <Form.Control as="select" formControlName="customers" onChange={(e) => {
                      if (e.target.value !== 'select') {
                        console.log(e.target.value)
                        this.setState({ cards_id: e.target.value })
                     
                      }
                 

                    }}  >
                      <option value={'select'}>Select id</option>
                      {this.state.data1.map(((item,i) =>

                        <option  key={i} className='hide' value={item._id} key={item._id}
                        >{item.description}</option>

                      ))}


                    </Form.Control>
                  </Form.Group>
                </div>
              ) : (<div></div>)}
            </Col>

          </Row>
          <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id="t1" >
              <Button appearance="primary" intent="warning" id='blogin'
                onClick={() => this.login()}>Save</Button>
            </Col> </Row>


            <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id="t1" >
              <Button appearance="primary" intent="warning" id='blogin'
                onClick={() => this.noti()}>Send Notification</Button>
            </Col> </Row>

        </div>



      </div>



    );
  }
}

export default Addprofile;

