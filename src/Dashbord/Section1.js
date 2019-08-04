import React from 'react';
import host from '../component/host';
import axios from 'axios';
import Component from '@reactions/component';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Button, toaster, FilePicker, Pane, Dialog ,TextInput} from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Section1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [], name: '', email: '',
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
      file1:''

    }
  }
  componentDidMount() {
    axios.get(host + 'api/v1/sections/', { headers: { token: cookies.get("token") } })
      .then(res => {
        // console.log(res.data.section)
        this.setState({
          data: res.data.section

        })
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }
  getSectionById(id){
    axios.get(host + `api/v1/sections/all/info?id=${id}`, { headers: { token: cookies.get("token") } })
    .then(res => {
      // console.log(res.data.section)
      this.setState({
        name: res.data.section[0].name

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
    formData.append("section_id", id);


    axios({
      url: host + `api/v1/sections/delete`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Section has been deleted successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }

  logo(id) {

if(this.state.file1>0){
  
  let formData = new FormData();
  var headers = {
    "Content-Type": "application/json",
    token: cookies.get("token")
  };
  formData.append("section_id", id);
  formData.append("file", this.state.file);


  axios({
    url: host + `api/v1/sections/editelogo`,

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
  login2(id) {

    let formData = new FormData();
    var headers = {
      "Content-Type": "application/json",
      token: cookies.get("token")
    };
    formData.append("section_id", id);
    formData.append("name", this.state.name);

    axios({
      url: host + `api/v1/sections/edite`,
      method: "POST",
      data: formData,
      headers: headers
    })
      .then(response => {
        toaster.success('Section has been edit successfully');
        this.componentDidMount()
      })
      .catch(function (error) {
        console.log(error.response.data)
        if (error.response) {
          toaster.danger(error.response.data.mgs);
        }
      });

  }



  render() {
    return (
      <div>

        <h5>Name</h5>
        {this.state.data.map(((item, i) =>


          <div key={i}   >{item.name}
            <div id='icon111'>
              <i style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }} className="fas fa-trash" 
              onClick={(e) => { this.login(item._id)}}/>
              <Component initialState={{ isShown: false }}>
                {({ state, setState }) => (
                  <Pane>
                    <Dialog
                      isShown={state.isShown}
                      title="Edit Section"
                      confirmLabel="Edit"
                            onCloseComplete={() => setState({ isShown: false })}
                            onConfirm={() => {
                              setState({ isShown: false })
                              this.login2(item._id)
                              this.logo(item._id)
                          }}
                    >
                         <div id='dd'>
                              <div>name :</div>
                      <TextInput type="text" id='width' value={this.state.name} onChange={(e) => {
                        this.setState({ name: e.target.value })
                      }} />
                      </div>
                      <div id='dd'>
                              <div>logo :</div>
                      <FilePicker id='width'
                        multiple
                        onChange={files =>
                          this.setState({ file: files[0],file1:files.length })
                        }
                      />
                      </div>
                    </Dialog>

                    <Button onClick={() => {this.getSectionById(item._id)
                      setState({ isShown: true })}}>   <i className="fas fa-edit"></i>  </Button>
                  </Pane>
                )}
              </Component>
            </div>
            <hr />
          </div>


        ))}



      </div>
    );
  }
}
export default Section1;
