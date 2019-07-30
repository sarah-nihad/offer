import React ,{Component} from 'react';

import axios from 'axios';
import host from './host';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
import {Row,Col} from  'react-bootstrap';
import StarRatings from 'react-star-ratings';
class AllCategory extends Component{
    constructor(){
        super();
        this.state={
          data:[],
          data1:[],
          data3:[],
          description:'',
          logo:'',
          type:'',
          section_type:"",
          type_value:'',
          uptime:'',
        cat:[],
          phone:'',
          location:'',
          cards:'',
          hot_deal:'',
          starts:'',
          rating:'',
          image:'',
          _id:''
        }
      }

      componentDidMount(){  

      
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('section_id');



            var type=localStorage.getItem('type')

        // const myPara = urlParams.get('id');
        
        axios.get(host+`api/v1/cat/get/?section_id=${myParam}` )
       
        .then(res=>{
          console.log(res.data)
          this.setState({
            cat: res.data.category,
            section_type:type
         
          })
        })
        .catch(err=>{console.log('error:' + err);
        })

    



      }







      render(){
        return(
            <Context.Consumer>{ctx => {
              return (
              
              <div id='postmain'>
       <div id="apfot">
                <Nav2 />
                <div id='most'>
              <p id='box'>
              <img src={require('./coof.png')} id='imgress3' style={this.state.section_type === 'كافيه' ?  {display:''} : { display:'none'}  } /> 
              <img src={require('./food.png')} id='imgress3' style={this.state.section_type === 'غذائية' ?  {display:''} : { display:'none'}  } /> 
              <img src={require('./chef.png')} id='imgress3' style={this.state.section_type === 'مطاعم' ?  {display:''} : { display:'none'}  } /> 
              <img src={require('./cup.png')} id='imgress3' style={this.state.section_type === 'حلويات' ?  {display:''} : { display:'none'}  } /> 
              <img src={require('./med.png')} id='imgress3' style={this.state.section_type === 'صيدليات' ?  {display:''} : { display:'none'}  } /> 
               {this.state.section_type}
              

               </p>
            </div>
  <div id ='offer12'>
  <Row style={{marginRight:'0px'}} id='rrr'>
   {this.state.cat.map(((item,i) =>
      <Col xs={6} md={4} lg={3} xl={2}  key={i} id='col21'>
    
  <div id ='cardprofile1' key={i}  onClick={()=>{
        window.location.href = `/profile?id=${item._id}`;
    
      }} >
   <img src={`https://www.orothe.com/api/v1/`+item.logo} id='img1' alt='offer' />
   {/* <img src={require('./asdf.png')} id='img1' /> */}
   
  {/* <div id='name1'>{item. description}</div> */}
  
  {/* <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div> */}
  
  
  <div id='name1'> <div id='sabdfj'> {item.name}  </div>  </div>
  </div>
  
  </Col>
   ))}
  
  </Row>
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
    export default AllCategory;