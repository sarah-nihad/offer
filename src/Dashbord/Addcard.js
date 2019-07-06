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






class Addcard extends Component {
    constructor(props){
        super(props);
    this.state={
      data:[],email:'',
      type:'',licenseDate:'',
      category_id:'',
      description:'',
        pass:(''),
        pass1:(''),
        phone:(''),
        mail:(''),
        page:('')
        ,file:[]
        ,date:(''), startDate: new Date(),
        rest:'',location:'',
        category_id:'',type_value:'',hot_deal:''
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

      
      var description=this.state.description;
       var type=this.state.type; 
     
      var hot_deal=this.state.hot_deal;
    
      var type_value=this.state.type_value;
      var file=this.state.file;
    //    var date=moment(this.state.date).format("YYYY-MM-DD");


       var category_id=this.state.category_id;

       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
     
       formData.append("hot_deal", hot_deal);
     
       formData.append("type", type);
       formData.append("description", description);
       formData.append("file", file);
       formData.append("category_id", category_id);
       formData.append("type_value",type_value)
       axios({
         url: host+ `api/v1/card/add`,
         method: "POST",
         data: formData,
           headers: headers
       }) .then(response => {
          toaster.success('Card has been added successfully');
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
          axios.get(host +'api/v1/cat/' ,{headers:{ token: cookies.get("token") }})
          .then(res=>{console.log(res.data)
            this.setState({
              data:res.data
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
  <div id='account'>Add Card</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center" id="row1" >
<Col  id='c2' sm="12" lg="6" >


<div id='dd'>

      <p>description :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="description" 
  required value={this.state.description} onChange={(e)=>{
    this.setState({description:e.target.value})
      }}/>
      </div>

    
     
     
<div id='dd'>
<p> type :</p>
 <TextInput id='width'
  name="text-input-name"
  placeholder=" true or false" 
  required value={this.state.type} onChange={(e)=>{
    this.setState({type:e.target.value})
      }}
/>
      
      </div>
     
     <div id='dd'>
    



     <p>type_value :</p>
<TextInput
  name="text-input-name" id='width'
  placeholder="must be number" 
  required value={this.state.type_value} onChange={(e)=>{
    this.setState({type_value:e.target.value})
      }}/> 
</div>



 </Col>
 <Col  id='cc' sm="12" lg="6" >



<div id='d1'>
      <p>hot_deal :</p>
<TextInput  id='width'
  name="text-input-name"
  placeholder="true or false"  required
  value={this.state.hot_deal} onChange={(e)=>{
    this.setState({hot_deal:e.target.value})
      }} />
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
<div id='d1'>
 <p >Id:</p>

    
    <Select  id='width' value={this.state.category_id} onChange={(e)=>{
      console.log(e.target.value)
this.setState({category_id:e.target.value})
 }} >
   <option value={"Select"}>Select id</option>
   {this.state.data.map(((item,i) =>

<option  key={i} value={item._id}>{item.name}</option>

   ))}
</Select>
    
    </div>  
 
</Col>

</Row>





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

export default Addcard;
