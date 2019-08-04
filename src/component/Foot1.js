import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
// import { Link, Redirect } from 'react-router-dom';
class Foot1 extends Component {
    render() {
        return (

            <div>
                <div id='fot'>
                    <Row style={{ marginRight: '0px' }} id='fotrow' >
                        <Col><div>
                          <a href="https://play.google.com/store/apps/details?id=com.crocze.request">  <img src={require('../assets/img/google.png')}  alt='google' id='footimg' /> </a> </div> </Col>
                        <Col>
                            <div>
                                <a href="https://apps.apple.com/us/app/%D8%A7%D9%82%D9%88%D9%89-%D8%A7%D9%84%D8%B9%D8%B1%D9%88%D8%B6/id1472420679"><img src={require('../assets/img/apple.png')} alt='apple' id='footimg' /></a>
                                </div>
                        </Col>
                        <Col>
                            <div id='facefot444'><a href="https://www.facebook.com/2196229490496384/"><img src={require('../assets/img/IMG_1004.jpg')} alt='facebook'  id='footimg' /></a></div> </Col>
                    </Row>

                    <span id='fotspan'>
                        Copyright <i className="far fa-copyright" id="copy"></i>  2019  <a href='http://www.croczi.com' id='aaa'>Croczi.com  </a></span>

                </div>
            </div>
        );
    }
}
export default Foot1;