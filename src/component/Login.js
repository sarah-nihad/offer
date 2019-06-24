import React,{Component} from 'react'
import './nav1.css';
import {Row,Col} from 'react-bootstrap';
import {TextInput,Select,Button,toaster} from 'evergreen-ui';
import host from './host';
import axios from 'axios';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
 class Login extends Component{
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      password:'',
      phone:''
     
    }}

    login(){

      
      var password=this.state.password;
   
    
       var phone=this.state.phone; 
      


       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
       formData.append("phone", phone);
  
       formData.append("password", password);
     
    
     
       axios({
         url:host+ `api/v1/user/login/`,
         method: "POST",
         data: formData,
           headers: headers
       })
         .then(response => {
          toaster.success('تم تسجيل الدخول بنجاح');

console.log(response)
         })
         .catch(function (error) {
           console.log(error.response.data)
           if (error.response) {
             toaster.danger(error.response.data.mgs);
           }
         });

        }

    

    render(){
        return(
            <div id='mm'>
            
              <div id='m2'>
            
<div id='main'>
<Row style={{marginRight:'0px'}}id='row1'>
<Col xs={12}  id='reg1'>  <p id='p1'> اهلا بك في عروض ! الرجاء قم بتسجيل الدخول</p></Col>
{/* <Col xs={12} lg={6} id='reg'> <p>New member? Register here</p> </Col> */}
  </Row>
    <Row style={{marginRight:'0px'}}id='row'>
        <Col xs={12} lg={6} id='cc'>

        <div id='d111'>
      <p id='p2'> رقم الموبايل : </p>
 <TextInput id='width'
  name="text-input-name"
  placeholder=" رقم الموبايل" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}
/>
</div>


<div id='d111'>
      <p id='p2'> الباسورد :</p>
 <TextInput id='width'
  name="text-input-name"
  placeholder="الباسورد" 
  required value={this.state.password} onChange={(e)=>{
    this.setState({password:e.target.value})
      }}
/>
</div>
<div id='forgot'>
  {/* <p id='p3'>Forgot Password?</p> */}
</div>
        </Col>
        <Col  xs={12} lg={6}>
        <div id='log1'>
     <button    onClick={()=>this.login()} id='log'> تسجيل الدخول</button>
    {/* <p> Or, login with</p> */}
     </div>
     {/* <div id='face1'>
     <button id='face'>Facebook</button>
     </div> */}
        </Col>
    </Row>
</div>

</div>

            </div>
        );
    }
}
export default Login;