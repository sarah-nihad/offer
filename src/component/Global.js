import React,{Component} from 'react';
import './nav1.css';
import {Row,Col} from  'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import host from './host';
import Context from './context';
 const cookies =new Cookies();
class Global extends Component{
    constructor(){
        super();
       
      }
    
    
    
      
    render(){
        return(

          <Context.Consumer>{ctx => {
            return (
            <div id='postmain'>
    
             <div id='most'>
                  <p id='box'>
                  <i className="fas fa-star" style={{color:'red',paddingRight:'10px'}}> </i>   العروض المميزة
               </p>
</div>
<div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>
 {ctx.value.data3.map(((item,i) =>
    <Col xs={6} md={4} lg={3} xl={2} id='col21'  key={i}>
  
<div id ='cardprofile'  onClick={()=>{
      window.location.href = `/profile?id=${item.category_id._id}`;
  
    }} >

<div className="container">
{/* <img src={require('./asdf.png')} id='img1' /> */}
 <img src={`https://www.orothe.com/api/v1/`+item.logo} id='img1' /> 
  <div className="text-block"> 
  <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>
  </div>
</div>
<div id='name1'>{item. description}</div>

<div id='popstar'>
 
  
                <StarRatings 
           
       
            rating={item.category_id.rating}
              starRatedColor=" rgb(255, 174, 0)"
              starDimension="15px"
           
              numberOfStars={5}
              starSpacing="0px"
           
                  />
                  </div>

</div>

</Col>
 ))}

</Row>
</div>
            </div>
                      )
                    }}
        
                    </Context.Consumer>
        );
    }
}

export default Global;