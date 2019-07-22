import React from 'react';
import './task.css';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
import Component from '@reactions/component';
import StarRatings from 'react-star-ratings';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import { Dialog, Pane } from 'evergreen-ui';
import {TextInput,Select,Button,toaster,FilePicker,Pane,Dialog } from 'evergreen-ui';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';

class Allbanner extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],name:'',email:'',
      phone:'',licenseDate:'',
      address:'', uptime:'',page_name:'',
      uptime:'',
      location:'',
      description:'',
      starts:'',
      category_id:'',
      _id:'',
      banner_id:''
      
    }
  }
  componentDidMount(){  
    axios.get(host +'api/v1/banner/' ,{headers:{ token: cookies.get("token") }})
    .then(res=>{console.log(res.data.banner)
      this.setState({
        data:res.data.banner
     
      })
    })
    .catch(err=>{console.log('error:' + err);
    })
  }
  login(id){

     let formData = new FormData();
     var headers = {
       "Content-Type": "application/json",
       token: cookies.get("token")
     };
     formData.append("banner_id", id);
     
    
     axios({
       url: host+ `api/v1/banner/delete`,
       method: "POST",
       data: formData,
         headers: headers
     })
      .then(response => {
        toaster.success('Banner has been deleted successfully');
         this.componentDidMount()
       })
       .catch(function (error) {
         console.log(error.response.data)
         if (error.response) {
           toaster.danger(error.response.data.mgs);
         }
       });
  
      }
  

      login2(id,name){
        var name=this.state.name;
        let formData = new FormData();
        var headers = {
          "Content-Type": "application/json",
          token: cookies.get("token")
        };
        formData.append("section_id", id);
        formData.append("name", name);
       
        axios({
          url: host+ `api/v1/sections/edite`,
          method: "POST",
          data: formData,
            headers: headers
        }) 
        .then(response => {
           toaster.success('banner has been edit successfully');
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
      
 <h5>Name</h5>
 {this.state.data.map(((item,i) =>
  
    
   <div  key={i}   >{item.name}      
     <div id='icon111'> <ListItemIcon style={{ color: 'black', paddingLeft: 30 }}>   
   <i className="fas fa-trash"   onClick={(e) => {
                    this.login(item._id)

                  }}   ></i>       </ListItemIcon> 
  






</div>
<hr/>
   </div>
    
   
     ))}
  


            </div>
        );
    }
}
export default Allbanner;
