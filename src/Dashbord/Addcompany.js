import React, { Component } from 'react';
import './task.css'
import { Row,Col} from 'react-bootstrap';
import {TextInput,Select,Button,toaster,FilePicker } from 'evergreen-ui';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
import Cookies from 'universal-cookie';

// import moment from 'moment';
import host from '../component/host';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';





class Addcompany extends Component {
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      
  phone:'',
        name:'',
        password:'',
   
        file:[]
        ,date:(''), startDate: new Date(),
      
        location:'',section_id:''
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
      this.setState({
        startDate: date,
        date
      });
    }
    login(){

      
      var name=this.state.name;
    
       var phone=this.state.phone;
      var pass=this.state.pass;
       var email=this.state.email; 
      var location=this.state.location;
      var file=this.state.file;
    //    var date=moment(this.state.date).format("YYYY-MM-DD");


       var section_id=this.state.section_id;

       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
       formData.append("email", email);
       formData.append("password", pass);
       formData.append("phone", phone);
    
       formData.append("name", name);
       formData.append("file", file);
       formData.append("section_id", section_id);
       formData.append("location",location)
       axios({
         url: host+ `api/v1/cat/register`,
         method: "POST",
         data: formData,
           headers: headers
       }) .then(response => {
          toaster.success('Category has been added successfully');
            console.log(response)
         })
         .catch(function (error) {
           console.log(error.response.data)
           if (error.response) {
             toaster.danger(error.response.data.mgs);
           }
         });

        }

    
        componentDidMount(){  
          axios.get(host +'api/v1/sections/' ,{headers:{ token: cookies.get("token") }})
          .then(res=>{console.log(res.data)
            this.setState({
              data:res.data.section
            })
          })
          .catch(err=>{console.log('error:' + err);
          })
        }

  render() {
    return (
     
   


<div id='rr'>
 <Row style={{marginRight:'0px'}} className="justify-content-md-center">
  <Col id="colimg" xs={12} md={12} lg={12}> 
  {/* <img src={require('./poerd by.png')} id="im" /> */}
  </Col></Row>
<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  {/* <img src={require('./ss.png')} id="tab" />  */}
  
  </Col> </Row>

  <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  <div id='account'>Add Category</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center"id="row1">
<Col  id='c2' sm="12" lg="6" >


<div id='dd'>

      <p>Email :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="email" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}/>
      </div>

    
     
     
<div id='dd'>
<p> Name :</p>
 <TextInput id='width'
  name="text-input-name"
  placeholder="User Name" 
  required value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}
/>
      
      </div>
     
     <div id='dd'>
    



     <p>location :</p>
<TextInput
  name="text-input-name" id='width'
  placeholder="location" 
  required value={this.state.location} onChange={(e)=>{
    this.setState({location:e.target.value})
      }}/> 
</div>



 </Col>
 <Col  id='cc' sm="12" lg="6" >



<div id='d1'>
      <p>Password :</p>
<TextInput id='ooo' 
  name="text-input-name"
  placeholder="Password"  required
  value={this.state.pass} onChange={(e)=>{
    this.setState({pass:e.target.value})
      }} />
      </div>
      <div id='d1'>
      <p>Phone:</p>
          <TextInput id='width'
  name="text-input-name"
  placeholder="phone" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}/>
      </div>
     
      <div id='d1'>
 <p >Insert Logo :</p>
<FilePicker  id='width'
  multiple
 
 
  onChange={files => 
    this.setState({file:files[0]})
  }
/>
</div>
  

   
    
      
 
</Col>

</Row>

<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t11" sm={12} >
     <div id='d3'>
  


<p > Section id:</p>  
    
   
    
    
 
    <Select  id='width' value={this.state.section_id} onChange={(e)=>{
      console.log(e.target.value)
this.setState({section_id:e.target.value})
 }} >
   <option value={"Select"}>Select id</option>
   {this.state.data.map(((item ,i)=>

<option  key={i} value={item._id}>{item.name}</option>

   ))} 
   
</Select>



      </div> 

      
   </Col> </Row>



<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t1" >
 <Button  appearance="primary" intent="warning" id='blogin'
         onClick={()=>this.login()}>Save</Button> 
   </Col> </Row>



</div>
    

    
</div>



    );
  }
}

export default Addcompany;
