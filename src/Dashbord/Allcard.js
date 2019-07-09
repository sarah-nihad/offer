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
      _id:'',
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
      card_id:'',
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



  login2(_id,hot_deal,type_value,type,description){

    var file=this.state.file;
    var hot_deal=this.state.hot_deal;
    var type_value=this.state.type_value;
    var type=this.state.type;
    var description=this.state.description;


    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
 
    formData.append("card_id",_id);
    formData.append("hot_deal", hot_deal);
    formData.append("type_value", type_value);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("file", file);
   
    axios({
      url: host+ `api/v1/card/edite`,
      method: "POST",
      data: formData,
        headers: headers
    }) .then(response => {
       toaster.success('Card has been edit successfully');
       this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });
 
     }
 

 
     delete(_id){


      let formData = new FormData();
      var headers = {
        "Content-Type": "application/json",
        token: cookies.get("token")
      };
   
      formData.append("card_id",_id);
   
      
     
      axios({
        url: host+ `api/v1/card/delete`,
        method: "POST",
        data: formData,
          headers: headers
      }) .then(response => {
         toaster.success('Card has been delete successfully');
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




      <div>
     
      

        <Row style={{ marginRight: '0px' }} className="justify-content-md-center">
          <Col id="tt" >
            <div id='account'>Edit Cards</div></Col> </Row>
        <div >

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
                    this.delete(item._id)

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
                       
                       <TextInput id='width'
  name="text-input-name"
  placeholder="description" 
  required value={this.state.description} onChange={(e)=>{
    this.setState({description:e.target.value})
      }}/>


<TextInput id='width'
  name="text-input-name"
  placeholder="type true or false" 
  required value={this.state.type} onChange={(e)=>{
    this.setState({type:e.target.value})
      }}
/>

 <TextInput
  name="text-input-name" id='width'
  placeholder="must be number" 
  required value={this.state.type_value} onChange={(e)=>{
    this.setState({type_value:e.target.value})
      }}/>  


      <TextInput  id='width'
  name="text-input-name"
  placeholder=" hot true or false"  required
  value={this.state.hot_deal} onChange={(e)=>{
    this.setState({hot_deal:e.target.value})
      }} />
            <FilePicker  id='width'
  multiple
 
 
  onChange={files => 
    this.setState({file:files[0]})
  }
/>


      <br/>
                            <button  onClick={(e) => {
                    this.login2(item._id,item.hot_deal,item.type_value,item.type,item.description)

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

