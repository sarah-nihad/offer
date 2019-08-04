import React from 'react';
import { Row, Col, Form, Table } from 'react-bootstrap';
import { TextInput, Button, toaster, FilePicker, Pane, Dialog } from 'evergreen-ui';
import axios from 'axios';
import Component from '@reactions/component';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Allcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      email: '',
      type1: '',
      type: '',
      hot_deal1: '',
      hot_deal: '',
      type_value: '',
      _id: '',
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
      card_id: '',
      cards_id: '',
      allCate: [],
      wait: true,
      file1: ''
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



  login2(_id) {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    formData.append("card_id", _id);
    formData.append("hot_deal", this.state.hot_deal1);
    formData.append("type_value", this.state.type_value);
    formData.append("type", this.state.type1);
    formData.append("description", this.state.description);
    // formData.append("file", file);

    axios({
      url: host + `api/v1/card/update`,
      method: "POST",
      data: formData,
      headers: headers,

    })
      .then(response => {
        if (response.status === 200) {
          toaster.success('Card has been edit successfully');
          this.componentDidMount()
        }

      })
      .catch(function (error) {
        console.log(error.response)
        if (error.response) {
          console.log(error.response.data);
        }
      });

  }


  logo(_id, file) {
    if (this.state.file1 > 0) {

      let formData = new FormData();
      var headers = {
        "Content-Type": "application/json",
        token: cookies.get("token")
      };
      formData.append("card_id", _id);
      formData.append("file", this.state.file);


      axios({
        url: host + `api/v1/card/edite`,

        method: "POST",
        data: formData,
        headers: headers
      })
        .then(response => {
          toaster.success('logo has been Edit successfully');
          this.componentDidMount()
        })
        .catch(function (error) {
          // console.log(error.response.data)
          if (error.response) {
            toaster.danger(error.response.data.mgs);
          }
        });

    }
  }




  delete(_id) {


    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    formData.append("card_id", _id);



    axios({
      url: host + `api/v1/card/delete`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
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

    axios.get(host + `api/v1/card/get/?category_id=${this.state.category_id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        console.log(res.data.cards)
        this.setState({
          description: res.data.cards[0].description,
          hot_deal1: res.data.cards[0].hot_deal,
          type_value: res.data.cards[0].type_value,
          type1: res.data.cards[0].type,
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
                      // console.log(e.target.value)
                      this.setState({ category_id: e.target.value })
                      setTimeout(() => {
                        this.getCateById()
                      }, 200);

                    }

                  }
                  }>
                    <option value={'select'}>Select id</option>
                    {this.state.data.map(((item, i) =>


                      <option key={i} value={item._id}    >{item.name}</option>

                    ))}
                  </Form.Control>
                </Form.Group>

              </div>
            </Col>

          </Row>
        </div>

        {!this.state.wait ? (
          <div>




            <Table responsive="lg" striped bordered hover variant="dark" style={{ width: '100%' }}>
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
                {this.state.data1.map(((item, i) =>

                  <tr key={i}>

                    <td>{item.description} </td>

                    <td>  {`${item.type}`}
                    </td>
                    <td>{item.type_value}</td>
                    <td>{item.hot_deal ? "true" : "false"} </td>
                    <td>

                      <div id='icon111'>
                        <i className="fas fa-trash" style={{ color: 'red', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                          onClick={(e) => { this.delete(item._id) }} />
                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane >
                              <Dialog
                                isShown={state.isShown}
                                title="Edit Category"
                                confirmLabel="Edit"
                                onCloseComplete={() => setState({ isShown: false })}
                                onConfirm={() => {
                                  setState({ isShown: false })
                                  this.login2(item._id)
                                  this.logo(item._id, item.file)

                                }}
                              >
                                <div id='dd'>
                                  <div>description :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="description"
                                    required value={this.state.description} onChange={(e) => {
                                      this.setState({ description: e.target.value })
                                    }} />
                                </div>
                                <div id='dd'>
                                  <div>type true or false :</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder="type true or false"
                                    required value={`${this.state.type1}`} onChange={(e) => {
                                      this.setState({ type1: e.target.value })
                                    }}
                                  />
                                </div>
                                <div id='dd'>
                                  <div> type value   must be number:</div>
                                  <TextInput
                                    name="text-input-name" id='width'
                                    placeholder="must be number"
                                    required value={this.state.type_value} onChange={(e) => {
                                      this.setState({ type_value: e.target.value })
                                    }} />

                                </div>
                                <div id='dd'>
                                  <div>  hot true or false</div>
                                  <TextInput id='width'
                                    name="text-input-name"
                                    placeholder=" hot true or false" required
                                    value={this.state.hot_deal1} onChange={(e) => {
                                      this.setState({ hot_deal1: e.target.value })
                                    }} />
                                </div>
                                <div id='dd'>
                                  <div> logo </div>
                                <FilePicker id='width'
                                  multiple


                                  onChange={files =>
                                    this.setState({ file: files[0], file1: files.length })
                                  }
                                />
                                </div>
                              </Dialog>

                              <Button onClick={() => { setState({ isShown: true }) }}>   <i className="fas fa-edit"></i>  </Button>
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

