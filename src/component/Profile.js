import React ,{Component} from 'react';
import './nav1.css';
import axios from 'axios';
import host from './host';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import {Row,Col} from  'react-bootstrap';
import StarRatings from 'react-star-ratings';
class Profile extends Component{
    constructor(){
        super();
        this.state={
          data:[],
          data1:[],
          data3:[],
          description:'',
          logo:'',
          type:'',
          type_value:'',
          uptime:'',
          logo:'',
          phone:'',
          location:'',
          cards:'',
          hot_deal:'',
          starts:'',
          rating:''
        }
      }

      componentDidMount(){  

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        const myPara = urlParams.get('id');
        
        axios.get(host+`api/v1/res/profile?id=${myParam}` )
        .then(res1=>{console.log(res1.data.res)
          this.setState({
            data:res1.data.res.cards,
            data1:res1.data.res

         
          })
        })
        .catch(err=>{console.log('error:' + err);
        })


        axios.get(host+`api/v1/eval/get?category_id=${myPara}` )
        .then(res1=>{console.log(res1.data.evals)
          this.setState({
            data3:res1.data.evals
         

         
          })
        })
        .catch(err=>{console.log('error:' + err);
        })



      }
      render(){
          return(
              <div>
                  <div id="apfot">
 <Nav2 />
<div id='profilecard'>
  {/* <img src={require('./p.jpg')}  />  */}
  {/* <Row style={{marginRight:'0px'}} id='rrr1'>
 <Col  xs={5} sm={3} > */}
       
             {/* </Col> */}
              
                {/* <Col xs={7}  sm={5}> */}
     
                {/* </Col> 
              <Col xs= {6}  sm={4}  > */}
                <div  id='locationicon' >
                <div id='conflex'>
               <div id='phoneppp' > {this.state.data1.phone} </div>
                
              <div id='iconprofile1'> <i className="fas fa-phone" id='icon'></i> </div> 
                </div>
                <div  id='conflex'>   
                <div id='phoneppp' >   {this.state.data1.location} </div> 
                <div id='iconprofile1'>   <i className ="fas fa-map-marker-alt" id='icon'></i> </div> 
                 
                 </div>
                </div>
                {/* </Col> 
                </Row>  */}

<div id='pppnamelogo'>

<div id='star' >
                <div id='proname'>{this.state.data1.name}</div>
              
                <StarRatings id='starwidth'
           
            rating={this.state.data1.rating}
              starRatedColor=" rgb(255, 174, 0)"
              starDimension="25px"
              starSpacing="2px"
              numberOfStars={5}
           
                  />

</div>
<div id='profilelogo' >
           <img src={`https://www.orothe.com/api/v1/`+this.state.data1.logo} id='img2233' />
             {/* <img src={require('./sss.jpg')} id='img2233' /> */}
        
             </div>

             
</div>



           </div>
           <div id='sarahprofile23f'>
           <div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>
 {this.state.data.map(((item,i) =>
    <Col xs={6} md={4} lg={3} xl={2} id='col21'  key={i}>
  
<div id ='cardprofile3'>

<div className="container">
 {/* <img src={require('./sss.jpg')} id='img1' />  */}
 <img src={`https://www.orothe.com/api/v1/`+item.logo} id='img1' /> 
  <div className="text-block3"> 
  <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>
  </div>



<div id='name1'>{item. description}</div>

</div>


</div>

</Col>
 ))}

</Row>
         
</div>         
</div>      
           
           </div>
           <Foot1 />
           
              </div>

          )
      }
    }
    export default Profile;