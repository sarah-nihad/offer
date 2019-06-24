import React ,{Component} from 'react';
import './nav1.css';
import axios from 'axios';
import host from './host';
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
          starts:''
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
<div id='profilecard'>
  {/* <img src={require('./p.jpg')}  />  */}
  {/* <Row style={{marginRight:'0px'}} id='rrr'> */}
 
         <div id='profilelogo' >
           <img src={this.state.data1.logo} id='img2233' />
             {/* <img src={require('./asdf.png')} id='img223' /> */}
        
             </div>
              
                {/* <Col xs={4}  md={{offset:1,span:3}}> */}
                <div id='star' >
                <div id='proname'>{this.state.data1.name}</div>
                {this.state.data3.map((item =>
                <StarRatings 
           
           //  value ={item.starts}
            rating={item.starts}
              starRatedColor=" rgb(255, 174, 0)"
              starDimension="30px"
              // ignoreInlineStyles="true"
             //  changeRating={this.changeRating}
              numberOfStars={5}
           
                  />))}

</div>
                {/* </Col> */}
                {/* <Col xs= {4}  md={{offset:1,span:3}}  > */}
                <div  id='locationicon' >
                <p>{this.state.data1.phone} <i class="fas fa-phone" id='icon'></i></p>
                <p>    {this.state.data1.location}  <i class="fas fa-map-marker-alt" id='icon'></i></p>
                </div>
                {/* </Col> */}
                {/* </Row> */}
           </div>
           <div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>
 {this.state.data.map((item =>
    <Col xs={6} md={4} lg={3} xl={2} id='col21'>
  
<div id ='cardprofile'>
<img src={item.logo} id='img1' />
<div id='name1'>{item. description}</div>
{/* <div>20000 IQD</div> */}
<div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>


</div>

</Col>
 ))}

</Row>
         
</div>         
         
           
           
           
              </div>

          )
      }
    }
    export default Profile;