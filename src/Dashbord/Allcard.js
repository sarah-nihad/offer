import React from 'react';
import './task.css';
import { Row, Col, Form, InputGroup,Table, } from 'react-bootstrap';
import { TextInput, Select, Button, toaster, FilePicker, Pane, Dialog } from 'evergreen-ui';
import DatePicker from "react-datepicker";
import axios from 'axios';
import Component from '@reactions/component';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Allcard extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      email: '',
      type: '',
      hot_deal:'',
      type_value:'',
      type:'',
      licenseDate: '',
      SelctCardName: 'Select',
      SelectCateName: 'Select',
      name: '',
      pass: (''),
      pass1: (''), phone: (''), mail: (''), page: ('')
      , file: []
      , date: (''), startDate: new Date(),
      rest: '', location: '', section_id: '',
      category_id: '',

      cards_id: '',
      allCate: [],
      wait: true
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
    }) .then(response => {
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
        console.log(res1.data)
        this.setState({
          data: res1.data
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })











  }

 





  getCateById() {
    const { category_id } = this.state
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    console.log(this.state.category_id);

    axios.get(host + `api/v1/card/get/?category_id=${this.state.category_id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        //  console.log(res.data.cards)
        this.setState({
          data1: res.data.cards,
          wait: false
        })

      })
      .catch(err => {
        console.log('error:' + err);
      })
  }


  render() {
    return (




      <div id='rr'>
     
      

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'>Add Profile</div></Col> </Row>
        <div id="form">

          <Row style={{ marginRight: '0px' }} className="justify-content-md-center" id="row11">
            <Col id='t1pro' xm="12" >


              <div id='d1'>
                <p > category_id:</p>


                <Form.Group as={Col} controlId="formGridState" id='width'  >
                  {/* <Form.Label>State</Form.Label> */}
                  <Form.Control as="select" onChange={(e) => {
                    if (e.target.value !== 'select') {
                      console.log(e.target.value)
                      this.setState({ category_id: e.target.value })
                      setTimeout(() => {
                        this.getCateById()
                      }, 200);

                    }

                  }
                  }>
                    <option value={'select'}>Select id</option>
                    {this.state.data.map(((item ,i)=>


                      <option  key={i} value={item._id} key={item._id}    >{item.name}</option>

                    ))}
                  </Form.Control>
                </Form.Group>

              </div>












           
            </Col>

          </Row>
          </div>
         
          {!this.state.wait ? (
                <div>

                


<Table responsive="lg" striped bordered hover variant="dark" style={{width:'100%'}}>
  <thead>
   
    <tr>
    
      <th> description</th>
      <th>type</th>
     
      <th>type_value</th>
      <th>hot_deal</th>
      <th>Edit &  delete</th>
    
    </tr>


  </thead>
 <tbody>
 {this.state.data1.map(((item,i) =>
    <tr  key={i}>
    
      <td>{item.description} </td>
    
      <td>  {item.type}
                    </td> 
      <td>{item.type_value}</td>
     <td>{item.hot_deal} </td>
    <td>

    <div id='icon111'> <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>   
   <i className="fas fa-trash"   onClick={(e) => {
                    this.login(item._id)

                  }}   ></i>       </ListItemIcon> 
    




<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Edit Category"
        onCloseComplete={() => setState({ isShown: false })}
        hasFooter={false}
      >
                         <input type="text" placeholder='Name' value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}/>
      <br/>
                             <input type="text" placeholder='mail' value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}/>
      <br/>

      <input type="text" placeholder='phone' value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}/>
      <br/>

      <input type="text" placeholder='location' value={this.state.location} onChange={(e)=>{
    this.setState({location:e.target.value})
      }}/>
      <br/>
                            <button  onClick={(e) => {
                    this.login2(item._id,item.name,item.email,item.phone,item.location)

                  }} >Edit</button>
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>   <i className="fas fa-edit"></i>  </Button>
    </Pane>
  )}
</Component>

</div>
    </td>
    </tr>
     ))}
   
  </tbody> 
</Table>




                </div>
              ) : (<div></div>)}

        



      </div>



    );
  }
}

export default Allcard;

