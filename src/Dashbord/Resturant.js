import React,{Component} from 'react';
import './task.css';
import {Table} from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';

class Resturant extends Component{
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
      rating:''
      
    }
  }



    componentDidMount(){  
        axios.get(host +'api/v1/cat/rating' ,{headers:{ token: cookies.get("token") }})
        .then(res=>{console.log(res.data)
          this.setState({
            data:res.data
         
          })
        })
        .catch(err=>{console.log('error:' + err);
        })
      }
    render(){
        return(
            <div>
              <Table responsive="lg" striped bordered hover variant="">
  <thead>
   
    <tr>
    
      <th> name</th>
      <th>Rating</th>
     
  
     
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map(((item,i) =>
    <tr  key={i}>
    
      <td>{item.name}</td>
    
      <td>   <StarRatings
           
            //  value ={item.starts}
             rating={item.rating}
               starRatedColor="#f7c20f"
               starDimension="25px"
               starSpacing="0px"
               numberOfStars={5}
            
                   />
                    </td> 
 
     
    
    </tr>
     ))}
   
  </tbody> 
</Table>

            </div>
        );
    }
}
export default Resturant;
