import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './nav1.css';
import axios from 'axios';
// class ControlledCarousel extends Component {
    class Slide1 extends Component{
   
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
        data:[],
        description:'',
        type_value:'',
        type:'',
        uptime:'',
        logo:'',
        Image:''
      };
    
    }
    componentDidMount(){  
      axios.get('https://rocky-springs-77202.herokuapp.com/api/v1/banner/' )
      .then(res=>{
        //console.log(res.data.banner)
        this.setState({
          data:res.data.banner
        })
      })
      .catch(err=>{console.log('error:' + err);
      })
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
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {this.state.data.map((item =>
       
          <Carousel.Item>
               <div id='ss'>
            <img  src={item.Image}  id='imgslid'/> 
{/* <img src={require('./asdf.png')} id='imgslid' /> */}

            <Carousel.Caption>
            <div>{item.description}</div>
              <h3>{item.name}</h3>
           
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        
           ))}
         
        </Carousel>
      );
    }
  }
  
//   render(<ControlledCarousel />);
  export default Slide1;