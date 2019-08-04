import React from 'react';
import { Table } from 'react-bootstrap';
import host from '../component/host';
import axios from 'axios';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { toaster } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Allrecomnd extends React.Component {
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
      rec_id: ''

    }
  }

  componentDidMount() {
    axios.get(host + 'api/v1/recommend/')
      .then(res => {

        this.setState({
          data: res.data.rec

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

    formData.append("rec_id", id);

    axios({
      url: host + `api/v1/recommend/deleterec`,
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










  render() {
    return (
      <div>




        <Table responsive="lg" striped bordered hover variant="" >
          <thead>

            <tr>

              <th> Name</th>

              <th> delete</th>

            </tr>


          </thead>
          <tbody>
            {this.state.data.map(((item, i) =>
              <tr key={i}>

                <td> {item.description} </td>

                <td>

                  <div id='icon111'>
                    <i className="fas fa-trash" style={{ color: 'black', marginRight: 30, marginTop: 10, cursor: 'pointer' }}
                      onClick={(e) => { this.login(item._id) }} />
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </Table>


















      </div>
    );
  }
}
export default Allrecomnd;
