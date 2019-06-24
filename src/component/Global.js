import React,{Component} from 'react';
import './nav1.css';
import {Row,Col} from  'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import host from './host';
 const cookies =new Cookies();
class Global extends Component{
    constructor(){
        super();
        this.state={
          data:[],
          description:'',
          type_value:'',
          type:'',
          uptime:'',
          logo:''
        }
      }
    
    
    
        componentDidMount(){  
            axios.get( host+'api/v1/card/special' )
            .then(res=>{console.log(res.data.hot_deal)
              this.setState({
                data:res.data.hot_deal
              })
            })
            .catch(err=>{console.log('error:' + err);
            })
          }
    render(){
        return(
            <div id='postmain'>
                <div id='most'>
              العروض المميزة
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
<div>{item.uptime}</div>

</div>

</Col>
 ))}
{/* <Col xs={6} md={4}  xl={2}>
<div id ='card'>
<img src={require('./asdf.png')} id='img1' />
<div id='name1'>Name</div>
<div>20000 IQD</div>
</div>
</Col>
<Col  xs={6}  md={4} xl={2}>
<div id ='card'>
<img src={require('./asdf.png')} id='img1' />
<div id='name1'>Name</div>
<div>20000 IQD</div>
</div>
</Col>
<Col   xs={6} md={4} xl={2}>
<div id ='card'>
<img src={require('./asdf.png')} id='img1' />
<div id='name1'>Name</div>
<div>20000 IQD</div>
</div>
</Col>
<Col  xs={6} md={4} xl={2}>
<div id ='card'>
<img src={require('./asdf.png')} id='img1' />
<div id='name1'>Name</div>
<div>20000 IQD</div>
</div>
</Col>
<Col  xs={6} md={4} xl={2}>
<div id ='card'>
<img src={require('./asdf.png')} id='img1' />
<div id='name1'>Name</div>
<div>20000 IQD</div>
</div>
</Col> */}
</Row>
</div>
            </div>
        );
    }
}

export default Global;