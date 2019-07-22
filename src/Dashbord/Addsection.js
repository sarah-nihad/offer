import React, { Component } from 'react';
import './task.css';
import { Row,Col,Button } from 'react-bootstrap';
import {TextInput,toaster,FilePicker} from 'evergreen-ui';
// import DatePicker from "react-datepicker";
 import axios from 'axios';
 import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies =new Cookies();

class Addsection extends Component {
  constructor(props){
    super(props);
this.state={
  data:[],email:'',
  type:'',licenseDate:'',

    name:'',
    pass:(''),
    pass1:(''),phone:(''),mail:(''),page:('')
    ,file:[]
    ,date:(''), startDate: new Date(),
    rest:'',location:'',section_id:''
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
   var type=this.state.type; 
   var phone=this.state.phone;
  var pass=this.state.pass;
   var mail=this.state.mail; 
  var location=this.state.location;
  var file=this.state.file;
//    var date=moment(this.state.date).format("YYYY-MM-DD");


   var section_id=this.state.section_id;

   let formData = new FormData();
   var headers = {
     "Content-Type": "application/json",
     token: cookies.get("token")
   };



   formData.append("name", name);
   formData.append("file", file);
  
   axios({
     url: host+ `api/v1/sections/add`,
     method: "POST",
     data: formData,
       headers: headers
   }) 
   .then(response => {
      toaster.success('Section has been added successfully');
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
      .then(res=>{console.log(res.data.companies)
        this.setState({
          data:res.data.companies
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
  {/* <img src={require('./ss.png')} id="tab" /> */}
   </Col> </Row>

   <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  <div id='account'>Add Section</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center"id="row1">
<Col  id='c2' sm="12" lg="6" >


      <div id='dd'>
      <p>Name :</p>
<TextInput id='width'
  name="text-input-name"
  placeholder="Name" 
  required value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}/>
      </div>

    
 
     
    



 </Col>
 <Col  id='cc' sm="12" lg="6" >

 

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
 <Col id="t1" >
 <Button  variant="outline-danger" id='blogin'
         onClick={()=>this.login()}>Save</Button> 
   </Col> </Row>



</div>
    

    
</div>



    );
  }
}

export default Addsection;

