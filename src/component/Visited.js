import React,{Component} from 'react';

import {Row,Col} from  'react-bootstrap';

import Context from './context';

class Visited extends Component{
  
    
    
    
      
    render(){
        return(
          <Context.Consumer>{ctx => {
            return (
            <div id='postmain'>
             <div id='most'>
                  <p id='box'>
                  <i className="fas fa-users" style={{color:'red',paddingRight:'10px'}}> </i>   الاكثر زيارة
               </p>
</div>
<div id ='offer12'>
<Row style={{marginRight:'0px'}} id='rrr'>
 {ctx.value.data5.map(((item,i) =>
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
              )
            }}

            </Context.Consumer>
        );
    }
}

export default Visited;