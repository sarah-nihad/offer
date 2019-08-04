import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import Context from './context';
// class ControlledCarousel extends Component {
class Slide1 extends Component {
  render() {

    return (
      <Context.Consumer>{ctx => {
        return (
          <div style={{ width: '100%', height: 'auto' }}>
            <Carousel>
              {ctx.value.datas.map((item,i) =>
                <Carousel.Item key={i}>
                  <img src={'https://www.orothe.com/api/v1/' + item.Image} style={{ width: '100%' }} alt='img' />
                  <Carousel.Caption>
                    <div>{item.description}</div>
                    <h3>{item.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
            </Carousel>
          </div>
        )
      }}

      </Context.Consumer>
    );
  }
}

//   render(<ControlledCarousel />);
export default Slide1;