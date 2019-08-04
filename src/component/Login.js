import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap';
import {TextInput,toaster} from 'evergreen-ui';
import host from './host';
import axios from 'axios';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
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

// console.log(response)
         })
         .catch(function (error) {
          //  console.log(error.response.data)
           if (error.response) {
             toaster.danger('قم بأدخال رقم الموبايل و الباسورد');
           }
         });

        }

    

    render(){
        return(
     
          <Context.Consumer>{ctx => {
            return (
            <div id='mm'>
              <div id="apfot">
          <Nav2 />
              <div id='m2'>
            
<div id='main'>
<Row style={{marginRight:'0px'}}id='row1ssfrfd'>
<Col xs={12}  id='reg1sese'>  <p id='p1sss'> اهلا بك في عروض ! الرجاء قم بتسجيل الدخول</p></Col>

  </Row>
    <Row style={{marginRight:'0px'}}id='rowlogins1'>
        <Col xs={12} lg={6} id='ccsarlogin3'>

        <div id='d111serlogin'>
      <p id='p2'> رقم الموبايل : </p>
 <TextInput id='width32'
  name="text-input-name"
  placeholder=" رقم الموبايل" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}
/>
</div>


<div id='d111serlogin'>
      <p id='p2'> الباسورد  : </p>
 <TextInput id='width32'
  name="text-input-name"
  placeholder=" الباسورد " 
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
<Foot1 />
            </div>

)
}}

</Context.Consumer>
        );
        
    }
}
export default Login;