import React,{Component} from 'react';
import './nav1.css';
import {Row,Col} from  'react-bootstrap';
import Cookies from 'universal-cookie';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import host from './host';
 const cookies =new Cookies();
class Recommend extends Component{
    constructor(){
        super();
        this.state={
          data:[],
          data3:[],
          description:'',
          type_value:'',
          type:'',
          uptime:'',
          logo:'',
          starts:'',
          category_id:''
        }
        this.setState({ category_id: this.state.category_id})
      }
    
     
    
        componentDidMount(){ 
          const urlParams = new URLSearchParams(window.location.search); 
          const myPara = urlParams.get('category_id');
          var category_id = this.state.category_id;
          let formData = new FormData();
          formData.append("category_id", category_id);
            axios.get(host+'api/v1/card/new' )
            .then(res=>{
               console.log(res.data.new)
             
               
              this.setState({
                data:res.data.new
              })
         
            })
            .catch(err=>{console.log('error:' + err);
            })
            console.log(this.state.category_id);
        
            
            axios.get(host+`api/v1/eval/get?category_id=5d0e261a5957c90004fff597` )
            .then(res1=>
              {console.log(res1.data.evals)
             
                
              this.setState({
                data3:res1.data.evals
             
    
             
              })
            })
            .catch(err=>{console.log('error:' + err);
            })
          }
    render(){
        return(
            <div id='postmain'>
                <div id='most'>
                  <p id='box'>
                  <i class="fab fa-hotjar" style={{color:'red',paddingRight:'10px'}}> </i>   العروض الجديدة
               </p>
</div>
<div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>

 {this.state.data.map((item => 
    <Col xs={6} md={4} lg={3} xl={2} id='col21'>
  
<div id ='cardprofile'>
 
<div className="container">
<img src={require('./asdf.png')} id='img1' />
  <div className="text-block"> 
  <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>
  </div>
</div>
 {/* <img src={item.logo} id='img1' /> */}
 {/* <img src={require('./asdf.png')} id='img1' /> */}
<div id='name1' key={item.category_id}  >{item. description} </div>

{/* <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div> */}
 <div id='popstar'>
  {this.state.data3.map((item =>
  
                <StarRatings 
           
           //  value ={item.starts}
            rating={item.starts}
              starRatedColor=" rgb(255, 174, 0)"
              starDimension="15px"
              // ignoreInlineStyles="true"
             //  changeRating={this.changeRating}
              numberOfStars={5}
              starSpacing="0px"
           
                  />))}
                  </div>

</div>

</Col>
 ))}

</Row>
</div>
            </div>
        );
    }
}

export default Recommend;