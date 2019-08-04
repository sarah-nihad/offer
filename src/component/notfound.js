import React, { Component } from 'react';


import Context from './context';
// class ControlledCarousel extends Component {
class NotFound extends Component {
    render() {

        return (
            <Context.Consumer>{ctx => {
                return (
                    <div style={{ width: '100%', height: '100Vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                            <h1 style={{textAlign:'center',color:'red',fontWeight:600,fontSize:80}}>404</h1>
                           <h2>Result Not Found</h2>
                        </div>
                    </div>
                )
            }}

            </Context.Consumer>
        );
    }
}
export default NotFound;