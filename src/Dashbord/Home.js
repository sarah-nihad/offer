import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Context from '../component/context'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            spinner: true,
        }
    }
    render() {
        return (
            <Context.Consumer>{ctx => {
                return (
            <div id='cardtab3'>
                <Row style={{ marginRight: 0 }} id='rowcard'>





                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addsection' id='l'>
                            <Card id='card1'>


                                <p>Add Section</p>



                            </Card>
                        </Link>
                    </Col>

                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addcompany' id='l'>
                            <Card id='card1'>


                                <p>Add Category</p>



                            </Card>
                        </Link>
                    </Col>

                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addbanner' id='l'>
                            <Card id='card1'>


                                <p>Add Banner</p>



                            </Card>
                        </Link>
                    </Col>
                </Row>

                <Row style={{ marginRight: 0 }} id='rowcard'>
                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addrecomnd' id='l'>
                            <Card id='card1'>


                                <p>Add recomnd</p>



                            </Card>
                        </Link>
                    </Col>



                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addcard' id='l'>
                            <Card id='card1'>


                                <p>Add card</p>



                            </Card>
                        </Link>
                    </Col>


                    <Col xs={12} xl={4} id='card222'>
                        <Link to='./Addprofile' id='l'>
                            <Card id='card1'>


                                <p>Add Profile</p>



                            </Card>
                        </Link>
                    </Col>

                </Row>

            </div>

)
}}

</Context.Consumer>
        );
    }
}
export default Home;
