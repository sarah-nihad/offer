import React, { Component } from 'react';

import axios from 'axios';
import host from './host';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
import { Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: [],
      data3: [],
      description: '',
      logo: '',
      type: '',
      type_value: '',
      uptime: '',

      phone: '',
      location: '',
      cards: '',
      hot_deal: '',
      starts: '',
      rating: '',
      image: '',
      spin: true
    }
  }

  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');


    axios.get(host + `api/v1/cat/profile/?id=${myParam}`)
      .then(res1 => {
        // console.log(res1.data.categoryInfo)
        this.setState({
          data: res1.data.cards,
          data1: res1.data.categoryInfo,
          data2: res1.data.description,
          data3: res1.data.menu,
          spin: false

        })
      })
      .catch(err => {
        console.log('error:' + err);
      })
  }
  render() {
    return (
      <Context.Consumer>{ctx => {
        
        return (
          <div>
            {!this.state.spin?(
              <div>
            
            <div id="apfot">
              <Nav2 />
              {this.state.data1.map(((item, i) =>
                <div key={i} id='profilecard'>


                  <div id='locationicon' >
                    <div id='sarshe123'>
                      <div id='conflex'>
                        <div id='phoneppp' > {item.phone} </div>

                        <div id='iconprofile1'> <i className="fas fa-phone" id='icon'></i> </div>
                      </div>
                      <div id='conflex'>
                        <div id='phoneppp' >   {item.location} </div>
                        <div id='iconprofile1'>   <i className="fas fa-map-marker-alt" id='icon'></i> </div>
                      </div>
                    </div>
                    {this.state.data2.map(((item, i) =>
                      <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10px' }} id='descse2u9'>
                        {item.description}</div>
                    ))}
                  </div>





                  <div id='pppnamelogo'>

                    <div id='star' >
                      <div id='proname'>{item.name}</div>

                      <StarRatings id='starwidth'

                        rating={item.rating}
                        starRatedColor=" rgb(255, 174, 0)"
                        starDimension="25px"
                        starSpacing="2px"
                        numberOfStars={5}

                      />

                    </div>
                    <div id='profilelogo' >
                      <img src={`https://www.orothe.com/api/v1/` + item.logo} id='img2233' alt='offer' />
                      {/* <img src={require('./sss.jpg')} id='img2233' /> */}

                    </div>


                  </div>



                </div>
              ))}
              <div id='sarahprofile23f'>
                {/* <div id ='offer12'> */}
                {/* <Row style={{marginRight:'0px'}} id='rrr'>
 {this.state.data.map(((item,i) =>
    <Col xs={6} md={4} lg={3} xl={2} id='col21'  key={i}>
  
<div id ='cardprofile3'>

<div className="container">

 <img src={`https://www.orothe.com/api/v1/`+item.logo} id='img1' /> 
  <div className="text-block3"> 
  <div id='off'>{item.type_value}   <img src={require('./d.png')} id='imgoff' /></div>
  </div>



<div id='name1'> <div id='sabdfj'>{item. description}</div></div>

</div>


</div>

</Col>
 ))}

</Row> */}


                <div id='offer12'>
                  <Row style={{ marginRight: '0px' }} id='rrr'>

                    {this.state.data.map(((item, i) =>
                      <Col xs={6} md={4} lg={3} xl={2} id='col21' key={i}>

                        <div id='cardprofile'>

                          <div className="container">

                            {/* <img src={require('./asdf.png')} id='img1' /> */}
                            <img src={'https://www.orothe.com/api/v1/' + item.logo} id='img1' alt='offer' />
                            <div className="text-block">
                              <div id='off'>{item.type_value}   <img src={require('../assets/img/d.png')} id='imgoff' alt='offer' /></div>
                            </div>
                          </div>

                          {/* <img src={require('./asdf.png')} id='img1' /> */}
                          <div id='name1' key={item.category_id}  > <div id='sabdfj'>{item.description} </div> </div>
                        </div>

                      </Col>
                    ))}

                  </Row>
                  <div style={{ marginTop: '40px' }}></div>
                  <Row style={{ marginRight: '0px' }} id='rrr'>
                    {this.state.data3.map(((item, i) =>
                      <Col key={i} xs={12} md={6} xl={4} style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }} id='profilemenu1'>
                        <div  style={{cursor:'pointer',zIndex:'3'}}   onClick={() => {
                            window.open( `https://www.orothe.com/api/v1/` + item.image,'_blank');
                           //window.location.href = `https://www.orothe.com/api/v1/` + item.image
    
                        }}>
                        <img src={`https://www.orothe.com/api/v1/` + item.image} style={{ maxHeight: '400px' }} id='imgmenu1' alt='offer'
                     />
</div>
                      </Col>
                    ))}

                  </Row>

                </div>
              </div>

            </div>
            <Foot1 />

          </div>
            ):(
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
              <img src={require('../assets/img/_food.gif')}   alt='gif'/>
              </div> 
            )}
         </div>
        
        )
      }}

      </Context.Consumer>
    );
  }
}
export default Profile;