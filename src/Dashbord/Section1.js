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

class Section1 extends React.Component{
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
      _id:''
      
    }
  }
  componentDidMount(){  
    axios.get(host +'api/v1/sections/' ,{headers:{ token: cookies.get("token") }})
    .then(res=>{console.log(res.data.section)
      this.setState({
        data:res.data.section
     
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
     formData.append("section_id", id);
     
    
     axios({
       url: host+ `api/v1/sections/delete`,
       method: "POST",
       data: formData,
         headers: headers
     }) .then(response => {
        toaster.success('Section has been deleted successfully');
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
        }) .then(response => {
           toaster.success('Section has been edit successfully');
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
  
    
   <p  key={i}   >{item.name}      
     <div id='icon111'> <ListItemIcon style={{ color: 'black', paddingLeft: 30 }}>   
   <i className="fas fa-trash"   onClick={(e) => {
                    this.login(item._id)

                  }}   ></i>       </ListItemIcon> 
  





<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Edit Section"
        onCloseComplete={() => setState({ isShown: false })}
        hasFooter={false}
      >
                            <input type="text" value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}/>
                            <button  onClick={(e) => {
                    this.login2(item._id,item.name)

                  }} >edit</button>
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>   <i className="fas fa-edit"></i>  </Button>
    </Pane>
  )}
</Component>
</div>
<hr/>
   </p>
    
   
     ))}
  


            </div>
        );
    }
}
export default Section1;
