import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import host from './host';
import Context from './context';
const cookies = new Cookies();
class Recommend extends Component {
  constructor() {
    super();


  }



  render() {
    return (
      <Context.Consumer>{ctx => {
        return (
          <div id='postmain'>
            <div id='most'>
              <p id='box'>
                <i className="fab fa-hotjar" style={{ color: 'red', paddingRight: '10px' }}> </i>   العروض الجديدة
               </p>
            </div>
            <div id='offer12'>
              <Row style={{ marginRight: '0px' }} id='rrr'>

                {ctx.value.data.map(((item, i) =>
                  <Col xs={6} md={4} lg={3} xl={2} id='col21' key={i}>

                    <div id='cardprofile' onClick={() => {
                      window.location.href = `/profile?id=${item.category_id._id}`;

                    }}>

                      <div className="container">
                        {console.log('https://www.orothe.com/api/v1/' + item.logo)
                        }
                        {/* <img src={require('./asdf.png')} id='img1' /> */}
                        <img src={'https://www.orothe.com/api/v1/' + item.logo} id='img1' />
                        <div className="text-block">
                          <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>
                        </div>
                      </div>

                      {/* <img src={require('./asdf.png')} id='img1' /> */}
                      <div id='name1' key={item.category_id}  >{item.description} </div>

                      {/* <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div> */}
                      <div id='popstar'>


                        <StarRatings


                          rating={item.category_id.rating}
                          starRatedColor=" rgb(255, 174, 0)"
                          starDimension="15px"

                          numberOfStars={5}
                          starSpacing="0px"

                        />
                      </div>

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

export default Recommend;