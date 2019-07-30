import React from 'react';
import './task.css';
import { Row, Col, Form } from 'react-bootstrap';
import {  Button, toaster,  TextInput } from 'evergreen-ui';
// import DatePicker from "react-datepicker";
import axios from 'axios';
import Component from '@reactions/component';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Addpos extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      description:'',
    
       file: []
      , date: (''), startDate: new Date(),
      rest: '', location: '', section_id: '',
      category_id: '',
      description:'',
      cards_id: '',
      allCate: [],
      wait: true,
      evals:'',
      image:'',
      menu_id:'',
      pos_id:''
    }
  
  }
 


  login(id){

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
 
    formData.append("pos_id", id);
 
    axios({
      url: host+ `api/v1/admin/pos/delete`,
      method: "POST",
      data: formData,
        headers: headers
    })
     .then(response => {
       toaster.success('Pos has been deleted successfully');
       this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });
 
     }


    


 
     login2(){
      var description=this.state.description;
      let formData = new FormData();
      var headers = {
        "Content-Type": "application/json",
        token: cookies.get("token")
      };
   
      formData.append("description", description);
     
      axios({
        url: host+ `api/v1/admin/pos`,
        method: "POST",
        data: formData,
          headers: headers
      }) 
      .then(response => {
         toaster.success('description has been added successfully');
       
        })
        .catch(function (error) {
          console.log(error.response.data)
          if (error.response) {
            toaster.danger(error.response.data.mgs);
          }
        });
   
       }

 



  componentDidMount() {
   
    axios.get(host + 'api/v1/admin/pos', { headers: { token: cookies.get("token") } })
      .then(res1 => {
        console.log(res1.data)
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




      <div >
     
      

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'> نقاط البيع </div></Col> </Row>
        <div >

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id='t1pro' xm="12" >


              <div id='d1'>
                <p > </p>

                <TextInput id='width'
  name="text-input-name"
  placeholder="" 
  required value={this.state.description} onChange={(e)=>{
    this.setState({description:e.target.value})
      }}/>

              </div>

            </Col>

          </Row>



          <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t1" >
 <Button  variant="outline-danger" id='blogin'
         onClick={()=>this.login2()}>Add</Button> 
   </Col> </Row>
          </div>
          <div>
{this.state.data.map(((item ,i)=>
    <Row style={{marginRight:'0px',marginTop:'20px'}}   >
        <Col xs={12}>
{item.description}   <ListItemIcon style={{ color: 'black', paddingLeft: 30 }}>   
<i className="fas fa-trash"   onClick={(e) => {
                 this.login(item._id)

               }}   ></i>       </ListItemIcon> 
        </Col>
    </Row>
))}
</div>
        
</div>

  
 




    );
  }
}

export default Addpos;

