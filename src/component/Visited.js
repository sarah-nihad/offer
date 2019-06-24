import React,{Component} from 'react';
import './nav1.css';
import {Row,Col} from  'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import host from './host';
import StarRatings from 'react-star-ratings';
 const cookies =new Cookies();
class Visited extends Component{
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
          name:'',
          starts:''
        }
      }
    
    
    
        componentDidMount(){  
          const urlParams = new URLSearchParams(window.location.search); 
          const myPara = urlParams.get('id');
            axios.get(host+'api/v1/cat/visited' )
            .then(res=>{console.log(res.data.visited)
              this.setState({
                data:res.data.visited
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
            <div id='postmain'>
                <div id='most'>
                الاكثر زيارة
</div>
<div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>
 {this.state.data.map((item =>
    <Col xs={6} md={4} lg={3} xl={2}  id='col21'>
  
<div id ='cardprofile'>
 <img src={item.logo} id='img1' />
 {/* <img src={require('./asdf.png')} id='img1' /> */}
{/* <div id='name1'>{item. description}</div> */}

{/* <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div> */}
<div>{item.name}</div>

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

</Col>
 ))}

</Row>
</div>
            </div>
        );
    }
}

export default Visited;