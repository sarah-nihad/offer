import React, { Component } from 'react';
import Recommend from './Recommend';
import Popular from './Popular';
import Global from './Global';
import Visited from './Visited';
import Slide1 from './Slide1';
import Foot1 from './Foot1';
import Nav2 from './Nav2';
class Maincard extends Component {
    render() {
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
        );
    }
}
export default Maincard;