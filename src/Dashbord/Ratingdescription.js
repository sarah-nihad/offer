import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import {  toaster} from 'evergreen-ui';
import axios from 'axios';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Ratingdescription extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      email: '',
      type: '',
      hot_deal:'',
      type_value:'',
      licenseDate: '',
      SelctCardName: 'Select',
      SelectCateName: 'Select',
      name: '',
      pass: '',
      pass1: '', 
      phone: '',
       mail: '', 
       page: '',
      file: [],
       date: '',
        startDate: new Date(),
      rest: '',
       location: '', 
       section_id: '',
      category_id: '',

      cards_id: '',
      allCate: [],
      wait: true,
      evals:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.getCateById = this.getCateById.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      date
    });
  }
  login(id){

  
    
  
  
   
  
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
 
    formData.append("card_id", id);
 
    
   
    axios({
      url: host+ `api/v1/card/delete`,
      method: "POST",
      data: formData,
        headers: headers
    })
     .then(response => {
       toaster.success('Card has been deleted successfully');
       this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });
 
     }
 

 



  componentDidMount() {
    //  const Url=new URLSearchParams(window.location.search)
    //  const id=Url.get('category_id')

    axios.get(host + 'api/v1/cat/', { headers: { token: cookies.get("token") } })
      .then(res1 => {
        // console.log(res1.data)
        this.setState({
          data: res1.data
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })











  }

 





  getCateById() {
   
   


    // console.log(this.state.category_id);

    axios.get(host + `api/v1/eval/get/?category_id=${this.state.category_id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        //  console.log(res.data.evals)
        this.setState({
          data1: res.data.evals,
          wait: false
        })

      })
      .catch(err => {
        console.log('error:' + err);
      })
  }


  render() {
    return (




      <div >
     
      

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'>Description of Rating</div></Col> </Row>
        <div >

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
            <Col id='t1pro' xm="12" >


              <div id='d1'>
                <p > </p>


                <Form.Group as={Col} controlId="formGridState" id='width'  >
                  {/* <Form.Label>State</Form.Label> */}
                  <Form.Control as="select" onChange={(e) => {
                    if (e.target.value !== 'select') {
                      // console.log(e.target.value)
                      this.setState({ category_id: e.target.value })
                      setTimeout(() => {
                        this.getCateById()
                      }, 200);

                    }

                  }
                  }>
                    <option value={'select'}>Select id</option>
                    {this.state.data.map(((item ,i)=>


                      <option  key={i} value={item._id}   >{item.name}</option>

                    ))}
                  </Form.Control>
                </Form.Group>

              </div>


           
            </Col>

          </Row>
          </div>
         
          {!this.state.wait ? (
      <div >
      
      <h5>Description</h5>
      {this.state.data1.map(((item,i) =>
       
         
        <p  key={i}   >{item.description}      
        
    
     <hr/>
        </p>
         
        
          ))}
       
     
     
                 </div>
              ) : (<div></div>)}

        



      </div>



    );
  }
}

export default Ratingdescription;

