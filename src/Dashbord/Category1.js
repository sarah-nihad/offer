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

class Category1 extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
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
      
      
    }
  }

  componentDidMount(){  
    axios.get(host +'api/v1/cat' ,{headers:{ token: cookies.get("token") }})
    .then(res=>{console.log(res.data)
      this.setState({
        data:res.data
     
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
  
     formData.append("category_id", id);
  
     
    
     axios({
       url: host+ `api/v1/cat/delete`,
       method: "POST",
       data: formData,
         headers: headers
     }) .then(response => {
        toaster.success('Category has been deleted successfully');
        this.componentDidMount()
       })
       .catch(function (error) {
         console.log(error.response.data)
         if (error.response) {
           toaster.danger(error.response.data.mgs);
         }
       });
  
      }
  
      login2(id,name,email,phone,location){
        var name=this.state.name;
        var email=this.state.email;
        var phone=this.state.phone;
        var location=this.state.location;
        let formData = new FormData();
        var headers = {
          "Content-Type": "application/json",
          token: cookies.get("token")
        };
        formData.append("category_id", id);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("location", location);
        axios({
          url: host+ `api/v1/cat/edite`,
          method: "POST",
          data: formData,
            headers: headers
        }) .then(response => {
           toaster.success('Category has been Edit successfully');
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
   



   <Table responsive="lg" striped bordered hover variant="" id='t1'>
  <thead>
   
    <tr>
    
      <th> Name</th>
      <th>Mail</th>
     
      <th>Phone</th>
      <th>Location</th>
      <th>Edit &  delete</th>
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map(((item,i) =>
    <tr  key={i}>
    
      <td>{item.name} </td>
    
      <td>  {item.email}
                    </td> 
      <td>{item.phone}</td>
     <td>{item.location} </td>
    <td>

    <div id='icon111'> <ListItemIcon style={{ color: 'black', paddingLeft: 30 }}>   
   <i className="fas fa-trash"   onClick={(e) => {
                    this.login(item._id)

                  }}   ></i>       </ListItemIcon> 
    




<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Edit Category"
        onCloseComplete={() => setState({ isShown: false })}
        hasFooter={false}
      >
                         <input type="text" placeholder='Name' value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}/>
      <br/>
                             <input type="text" placeholder='mail' value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}/>
      <br/>

      <input type="text" placeholder='phone' value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}/>
      <br/>

      <input type="text" placeholder='location' value={this.state.location} onChange={(e)=>{
    this.setState({location:e.target.value})
      }}/>
      <br/>
                            <button  onClick={(e) => {
                    this.login2(item._id,item.name,item.email,item.phone,item.location)

                  }} >Edit</button>
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>   <i className="fas fa-edit"></i>  </Button>
    </Pane>
  )}
</Component>

</div>
    </td>
    </tr>
     ))}
   
  </tbody> 
</Table>















{/* 
 <h5>Name</h5>
 {this.state.data.map((item =>
   
    
   <div key={item.id} >{item.name}   {item.email}   
   
<hr/>
   </div>
    
     ))} */}
   

            </div>
        );
    }
}
export default Category1;
