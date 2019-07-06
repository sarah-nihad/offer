import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './nav1.css';
import axios from 'axios';
import host from './host';
import Context from './context';
// class ControlledCarousel extends Component {
    class Slide1 extends Component{
   
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        data:[],
     
      
       
      };
    
    }
    
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Context.Consumer>{ctx => {
          return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {ctx.value.datas.map((item =>
     
       
          <Carousel.Item>
            
               <div id='ss'>
            <img  src={'https://www.orothe.com/api/v1/'+item.Image}  id='imgslid'/> 
  {/* <img src={require('./350.jpg')} id='imgslid' />   */}

            <Carousel.Caption>
            <div>{item.description}</div>
              <h3>{item.name}</h3>
           
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        
           ))}
         
        </Carousel>
           )
          }}

          </Context.Consumer>
      );
    }
  }
  
//   render(<ControlledCarousel />);
  export default Slide1;