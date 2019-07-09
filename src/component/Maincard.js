import React, { Component } from 'react';
import Recommend from './Recommend';
import Popular from './Popular';
import Global from './Global';
import Visited from './Visited';
import Slide1 from './Slide1';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
import Context from './context';
class Maincard extends Component {
    render() {
        return (
            <Context.Consumer>{ctx => {
                if ((ctx.value.auth === true  || ctx.value.auth ===false)&&  ctx.value.spin===false && ctx.value.spin1===false
                && ctx.value.spin2===false && ctx.value.spin3===false && ctx.value.spin4===false) {
                    return (
                        <div>
                            <div id="apfot">
                                <Nav2 />
                                <Slide1 />
                                <Popular />
                                <Global />
                                <Recommend />
                                <Visited />
                            </div>
                            <Foot1 />

                        </div>
                    )
                }
                else {
                    return(
                        <img src={require('../Dashbord/_food.gif')}  style={{width:'100%',height:'100vh'}} alt='gif'/>
                       ) 
                }
            }}

            </Context.Consumer>
        );
    }
    
}

export default Maincard;