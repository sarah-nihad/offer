import React from 'react';
import './task.css';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
import Component from '@reactions/component';
import StarRatings from 'react-star-ratings';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {TextInput,Select,Button,toaster,FilePicker,Pane,Dialog } from 'evergreen-ui';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';

class Allrecomnd extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      file:[],
      name:'',
      email:'',
      phone:'',
      licenseDate:'',
      address:'',
       uptime:'',
       page_name:'',
      uptime:'',
      location:'',
      description:'',
      starts:'',
      category_id:'',
      _id:'',
      rec_id:''
      
    }
  }

  componentDidMount(){  
    axios.get(host + 'api/v1/recommend/')
    .then(res => {
      // console.log(res.data.rec)
      this.setState({
        data: res.data.rec
      
      })
    })
    .catch(err => {
      console.log('error:' + err);
   
    })
  }


  login(id){

     let formData = new FormData();
     var headers = {
       "Content-Type": "application/json",
       token: cookies.get("token")
     };
  
     formData.append("rec_id", id);
  
     axios({
       url: host+ `api/v1/recommend/deleterec`,
       method: "POST",
       data: formData,
         headers: headers
     })
      .then(response => {
        toaster.success('Card has been deleted successfully');
        this.componentDidMount()
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
            <div>
   



   <Table responsive="lg" striped bordered hover variant="" >
  <thead>
   
    <tr>
    
      <th> Name</th>
     
      <th> delete</th>
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map(((item,i) =>
    <tr  key={i}>
    
      <td> {item.description} </td>
    
    <td>

    <div id='icon111'> <ListItemIcon style={{ color: 'black', paddingLeft: 30 }}>   
   <i className="fas fa-trash"   onClick={(e) => {
                    this.login(item._id)

                  }}   ></i>       </ListItemIcon> 
    






</div>
    </td>
    </tr>
     ))}
   
  </tbody> 
</Table>
















   

            </div>
        );
    }
}
export default Allrecomnd;
