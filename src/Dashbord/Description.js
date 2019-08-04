import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Button, toaster, Pane, Dialog } from 'evergreen-ui';
import axios from 'axios';
import Component from '@reactions/component';
import host from '../component/host';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      email: '',
      type: '',
      hot_deal: '',
      type_value: '',
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
      description: '',
      cards_id: '',
      allCate: [],
      wait: true,
      evals: '',
      image: '',
      menu_id: ''
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



  login(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    formData.append("description_id", id);

    axios({
      url: host + `api/v1/cat/deletedescription`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('description has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  deletmenu(id) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    formData.append("menu_id", id);

    axios({
      url: host + `api/v1/cat/deletemenu`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('menu has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }



  login2(id, description) {
    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("description_id", id);
    formData.append("description", description);

    axios({
      url: host + `api/v1/cat/descriptionupdate`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('description has been edit successfully');
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

    axios.get(host + `api/v1/cat/profile/?id=${this.state.category_id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        //  console.log(res.data.evals)
        this.setState({
          // data1: res.data.evals,
          data2: res.data.description,
          data3: res.data.menu,
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
            <div id='account'> profile Information</div></Col> </Row>
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
                    {this.state.data.map(((item, i) =>


                      <option key={i} value={item._id}    > {item.name}</option>

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

            {this.state.data2.map(((item, i) =>


              <div key={i}   >{item.description}
                <div id='icon111'>
                  <i className="fas fa-trash" style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                    onClick={(e) => { this.login(item._id) }} />
                  <Component initialState={{ isShown: false }}>
                    {({ state, setState }) => (
                      <Pane>
                        <Dialog
                          isShown={state.isShown}
                          title="Edit Section"
                          onCloseComplete={() => setState({ isShown: false })}
                          hasFooter={false}
                        >
                          <input type="text" value={this.state.description} onChange={(e) => {
                            this.setState({ description: e.target.value })
                          }} />
                          <button onClick={(e) => {
                            this.login2(item._id, item.description)

                          }} >edit</button>
                        </Dialog>

                        <Button onClick={() => setState({ isShown: true })}>   <i className="fas fa-edit"></i>  </Button>
                      </Pane>
                    )}
                  </Component>
                </div>
                <hr />
              </div>
            ))}
            <h5>Menue</h5>
            {this.state.data3.map(((item, i) =>
              <Row key={i}   >
                <Col xs={12}>
                  <img src={`https://www.orothe.com/api/v1/` + item.image} style={{ width: '200px' }} alt='img' />
                  <div id='icon111'>
                    <i className="fas fa-trash" style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                      onClick={(e) => { this.deletmenu(item._id) }} />
                  </div>
                </Col>
              </Row>

            ))}

          </div>
        ) : (<div></div>)}




      </div>



    );
  }
}

export default Description;

