import React from 'react';
import { Navbar, Nav, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import host from './host';
import Autosuggest from 'react-autosuggest';
import Context from './context';
import { Popover, Pane, Avatar } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


var languages = [];
var id = '';
const getSuggestions = value => {

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;


  return inputLength === 0 ? [] : languages.filter(lang =>

    lang.name.toLowerCase().slice(0, inputLength) === inputValue

  );
};

function getSuggestionValue(suggestion) {
  id = suggestion._id
  return suggestion.name

}
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



class Nav2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      data1: [],
      searchData: [],
      description: '',
      suggestions: [],
      value: '',

      type_value: '',
      type: '',
      uptime: '',
      logo: '',

      _id: '',
      name: '',
      location: '',
      category: ''

    }
  }



  onChange = (event, { newValue }) => {

    //   var name=newValue.split
    //  var res = name.split("  ");
    this.setState({
      value: newValue
    });

  };
  onSuggestionsFetchRequested = ({ value }) => {

    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {

    this.setState({
      suggestions: []
    });
  };

  componentDidMount() {
    axios.get(host + `api/v1/sections`)
      .then(res => {
        //console.log(res.data.section)
        this.setState({
          data: res.data.section
        })
      })
      .catch(err => {
        console.log('error:' + err);
      })



    axios.get(host + `api/v1/cat/search`)
      .then(res => {
        languages = res.data.visited;
        // this.setState({
        //   searchData:res.data.visited
        // })
      })
      .catch(err => {
        console.log('error:' + err);
      })



  }
  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  onEnter(){
   
    
    var input = document.getElementById("teeeest");
  input.addEventListener("keyup", function(event) {
  
    if (event.keyCode === 13) {
     
      event.preventDefault();
     
      document.getElementById("iconcolor").click();
    }
  });
  }
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: '',
      value,
      width: '400px',
      onChange: this.onChange,

    };

    return (
      <Context.Consumer>{ctx => {
        return (
          <div >




            <Navbar expand="lg" id="navmai">


              <Navbar.Brand style={{ paddingLeft: '3%' }}>  <img src={require('../assets/img/asdf.png')} id='img22' alt='offer' /></Navbar.Brand>

              <Navbar.Brand style={{ paddingLeft: '3%' }}>  <img src={require('../assets/img/with.png')} id='img223sss' alt='offer' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
              <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }} >
                <Nav className="mr-auto">

                </Nav>



                <div id='itemnav' >
                  <div id='searchwidth'>
                    <InputGroup id='teeeest'  onChange={() => {
this.onEnter()}}
                    >

                      <InputGroup.Prepend id='prep'  >

                        <InputGroup.Text id="basic-addon1" style={{ marginLeft: -39, cursor: "pointer" }} className='ss' onClick={() => {

                          if (id) {
                            window.location.href = `/profile?id=${id}`
                          }

                        }}>

                          <i className="fas fa-search" id='iconcolor'></i>
                        </InputGroup.Text>
                        <div style={{ color: '#000' }}>
                          <Autosuggest style={{ color: 'red' }}
                            id="Autosuggest"

                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}

                            inputProps={inputProps}
                          />
                        </div>
                      </InputGroup.Prepend>


                    </InputGroup>

                  </div>
                  <div className="dropdown">
                    <div id="contact">  الاقسام </div>

                    <div className="dropdown-content">
                      {this.state.data.map(((item, i) =>
                        <div key={i}>
                          <div key={item._id}

                            onClick={() => {
                              localStorage.setItem("type", item.name)

                              window.location.href = `/AllCategory?section_id=${item._id}&&type=${item.name}`;

                            }}
                          >
                            <div id='navsaradirection1'>
                              <div>   <img src={'https://www.orothe.com/api/v1/' + item.logo} id='navsectionlogo' alt='offer' /></div>

                              <div style={{ marginRight: '5px' }}>   {item.name}     </div>
                            </div>
                          </div>


                        </div>


                      ))}
                    </div>

                  </div>
{!ctx.value.auth?(
                  <div  className="dropdown"  >
                    <Link to='/Login1'  >
                      <div id="contact">  تسجيل الدخول </div>
                    </Link>
                    {/* <div className="dropdown-content"> */}
                    {/* 
                      <div id='navsaradirection1'>
                      <Link  to='/Login2' >
                        <div style={{ marginRight: '5px' }}>مطعم </div>
                        </Link>
                      </div> */}
                    {/* <div id='navsaradirection1'>
                      <Link  to='/Login' >
                        <div style={{ marginRight: '5px' }}>مستخدم </div>
                        </Link>
                      </div> */}
                    {/* <div id='navsaradirection1'> */}
                      {/* <Link to='/Login1' >
                        <div style={{ marginRight: '5px' }}>مدير</div>
                        </Link>
                      </div> */}
                    {/* </div> */}

                  </div>
):(<React.Fragment></React.Fragment>)}
                  <Link to='./POS' id="contact"> نقاط البيع   </Link>

                  <Link to='./' id="contact"> الرئيسية </Link>
                  {ctx.value.auth===true?(
                  <div id='provnav'>
                    <Popover
                      content={
                        <Pane
                          width={200}
                          height={200}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                        >
                          {/* {ctx.value} */}
                          <button id='out'
                            onClick={() => {
                              cookies.remove("token");
                              window.location.href = "/"
                            }}
                          > تسجيل الخروج</button>
                          <div style={{ paddingTop: '10px' }}></div>
                          {ctx.value.auth === true ? (
                            <Link to='/Home'>
                              <button id='out' style={{ marginTop: 10 }}>dashbord </button>
                            </Link>
                          ) : (<React.Fragment></React.Fragment>)}

                        </Pane>
                      }
                    >

                      <Avatar
                        src={require('../assets/img/d.jpg')}
                        name=""
                        size={30}
                        id='hh'
                      />
                    </Popover>
                  </div>
                  ):(<React.Fragment></React.Fragment>)}
                </div>




              </Navbar.Collapse>

            </Navbar>












          </div>
        )
      }}

      </Context.Consumer>
    );
  }
}

export default Nav2;