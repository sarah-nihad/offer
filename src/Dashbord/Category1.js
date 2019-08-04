import React from 'react';
import { Table } from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
import Component from '@reactions/component';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Button, toaster, FilePicker, Pane, Dialog, TextInput } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Category1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      file: [],
      name: '',
      email: '',
      phone: '',
      licenseDate: '',
      address: '',
      uptime: '',
      page_name: '',
      location: '',
      description: '',
      starts: '',
      category_id: '',
      _id: '',
      file1: ''
    }
  }

  componentDidMount() {
    axios.get(host + 'api/v1/cat', { headers: { token: cookies.get("token") } })
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data

        })
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }

  getCatById(id) {
    axios.get(host + `api/v1/cat/all/info?id=${id}`, { headers: { token: cookies.get("token") } })
      .then(res => {
        console.log(res.data.category)
        this.setState({
          email: res.data.category[0].email,
          location: res.data.category[0].location,
          name: res.data.category[0].name,
          phone: res.data.category[0].phone,

        })
      })
      .catch(err => {
        console.log('error:' + err);
      })

  }
  login(id) {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };

    formData.append("category_id", id);

    axios({
      url: host + `api/v1/cat/delete`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Category has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  login2(id) {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("category_id", id);
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("location", this.state.location);
    // formData.append("file", file);
    axios({
      url: host + `api/v1/cat/update`,

      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Category has been Edit successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        // console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }


  logo(id) {
    if (this.state.file1 > 0) {
      let formData = new FormData();
      var headers = {
        "Content-Type": "application/json",
        token: cookies.get("token")
      };
      formData.append("category_id", id);
      formData.append("file", this.state.file);


      axios({
        url: host + `api/v1/cat/edite`,

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





  render() {
    return (
      <div>




        <Table responsive="lg" striped bordered hover variant="" >
          <thead>

            <tr>

              <th> Name</th>
              <th>Mail</th>

              <th>Phone</th>
              <th>Location</th>
              <th>Edit &  delete</th>

            </tr>


          </thead>
          <tbody>
            {this.state.data.map(((item, i) =>
              <tr key={i}>

                <td>{item.name} </td>

                <td>  {item.email}
                </td>
                <td>{item.phone}</td>
                <td>{item.location} </td>
                <td>

                  <div id='icon111'>
                    <i className="fas fa-trash" style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                      onClick={(e) => { this.login(item._id) }} />





                    <Component initialState={{ isShown: false }}>
                      {({ state, setState }) => (
                        <Pane>
                          <Dialog
                            isShown={state.isShown}
                            title="Edit Category"
                            confirmLabel="Edit"
                            onCloseComplete={() => setState({ isShown: false })}
                            onConfirm={() => {
                              setState({ isShown: false })
                              this.login2(item._id)
                              this.logo(item._id)
                            }}
                          >
                            <div id='dd'>
                              <div>Name :</div>
                              <TextInput type="text" placeholder='Name' id='width' value={this.state.name} onChange={(e) => {
                                this.setState({ name: e.target.value })
                              }} />
                            </div>
                            <div id='dd'>
                              <div>mail :</div>
                              <TextInput type="text" placeholder='mail' id='width' value={this.state.email} onChange={(e) => {
                                this.setState({ email: e.target.value })
                              }} />
                            </div>
                            <div id='dd'>
                              <div>phone :</div>
                              <TextInput type="text" placeholder='phone' id='width' value={this.state.phone} onChange={(e) => {
                                this.setState({ phone: e.target.value })
                              }} />
                            </div>
                            <div id='dd'>
                              <div>location :</div>
                              <TextInput type="text" placeholder='location' id='width' value={this.state.location} onChange={(e) => {
                                this.setState({ location: e.target.value })
                              }} />
                            </div>
                            <div id='dd'>
                              <div>logo :</div>
                              <FilePicker id='width'
                                multiple
                                onChange={files =>
                                  this.setState({ file: files[0], file1: files.length })
                                }
                              />
                            </div>
                          </Dialog>

                          <Button onClick={() => {
                            this.getCatById(item._id)
                            setState({ isShown: true })
                          }}>   <i className="fas fa-edit"></i>  </Button>
                        </Pane>
                      )}
                    </Component>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>















        {/* 
 <h5>Name</h5>
 {this.state.data.map((item =>
   
    
   <div key={item.id} >{item.name}   {item.email}   
   
<hr/>
   </div>
    
     ))} */}


      </div>
    );
  }
}
export default Category1;
