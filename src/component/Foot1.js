import React ,{Component} from 'react';
import './nav1.css';
import {Row,Col} from 'react-bootstrap';
class Foot1 extends Component {
    render(){
        return(

            <div>
                <div id='fot'>
                    <Row style={{marginRight:'0px'}} >
                        <Col><div><img src={require('./google.png')} id='footimg' /></div> </Col>
                        <Col>
<div><img src={require('./apple.png')} id='footimg' /></div> </Col>
                    </Row>



</div>
            </div>
        );
    }
}
export default Foot1;