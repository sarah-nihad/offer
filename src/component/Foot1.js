import React ,{Component} from 'react';
import './nav1.css';
import {Row,Col} from 'react-bootstrap';
import { Link,Redirect } from 'react-router-dom';
class Foot1 extends Component {
    render(){
        return(

            <div>
                <div id='fot'>
                    <Row style={{marginRight:'0px'}} id='fotrow' >
                        <Col><div><img src={require('./google.png')} id='footimg' /></div> </Col>
                        <Col>
<div><img src={require('./apple.png')} id='footimg' /></div>
 </Col>
                    </Row>
            
                    <span id='fotspan'> 
                    Copyright <i className="far fa-copyright" id="copy"></i>  2019  <a href ='http://www.croczi.com' id='aaa'>Croczi.com  </a></span> 
                 
</div>
            </div>
        );
    }
}
export default Foot1;