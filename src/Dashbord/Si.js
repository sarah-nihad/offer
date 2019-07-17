
import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

// import Context from '../Context';
// import Login from '../login/login';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import Addcard from './Addcard';
// import Border_all from '@material-ui/icons/Border_all';

import { Row, Col,Navbar,Nav } from 'react-bootstrap';

import { Popover, Pane, Avatar } from 'evergreen-ui';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Addbanner from './Addbanner';
import Category1 from './Category1';
import Home from './Home';
import Allcard from './Allcard';
import Allbanner from './Allbanner';
import Addsection from './Addsection';
import  Addprofile from './Addprofile';
import Addcompany from './Addcompany';
import Addrecomnd from './Addrecomnd';
import Resturant from './Resturant';
import Section1 from './Section1';
import Addusers from './Addusers';
import Context from '../component/context';
import Login1 from '../component/Login1';
import Ratingdescription from './Ratingdescription';
import Description from './Description';
const cookies = new Cookies();
function rendericon(props) {
 
  // if (props.match.path === '/Home') {
  //   return ( <Link to='./Add' id='ll'><i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  // }
//   else if (props.match.path === '/Discountuser') {
//     return ( <Link to='./Add' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
//   }
  if (props.match.path === '/Addcompany') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addrecomnd') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
else if (props.match.path === '/Addsection') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addcard') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
 else if (props.match.path === '/Addbanner') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addprofile') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Resturant') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Section1') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Description') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addusers') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Category1') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Allcard') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }

  else if (props.match.path === '/Allbanner') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  
  else if (props.match.path === '/Ratingdescription') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
}

  

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
      <Context.Consumer>
        {ctx => {
     
        if (ctx.value.auth === true ){
            return (
            
      <div className={classes.root} >

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} id='abr' >
         
      
       
          <Navbar  expand="lg" id="navmain22">
    
          <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
                 <Navbar.Brand >{rendericon(this.props)}</Navbar.Brand>
             
                      <Nav className="mr-auto">
                   
                      </Nav>
<div id='sarahdash76h'>
<Link to='/'>
                      <img src={require('./poerd by.png')} id='poerdsrAA' />
                  </Link>
                        <div id='ss'>
                    <div id='p1' style={{color:'black'}}>Logout</div> 
                     <Popover  
              content={
                <Pane
                  width={200}
                  height={100}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                <button  id='out' onClick={()=>{ 
                  cookies.remove("token");
                  window.location.href= "/"
                }}>Log out</button>
                </Pane>
              }
            >
              <Avatar
                 src={require('./d.jpg' )} 
                name=""
                size={30}
                id='hh'
              />
            </Popover>
    
            </div>
                        
                    
            </div>
                 
              </Navbar>
         
             
        
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}

            >
              <div id='jj' >
                <div ></div>
                <div className={classes.toolbar} />
        
                <Link to='/Resturant'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="fas fa-star" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white', fontWeight: '500',fontSize:'15px'}}>Rating</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Ratingdescription'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="fas fa-star" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white', fontWeight: '500',fontSize:'15px'}}> Description</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>
                <Link to='/Description'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30,fontSize:'16px' }}>  <i className="far fa-id-badge" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white', fontWeight: '500',fontSize:'15px'}}> profile Info.</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>
                <Link to='/Section1'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="fas fa-table" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px'}}>Section</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Category1'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="fas fa-table" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Category</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Allcard'>
                  <List style={{padding:0}}>

                    <ListItem button >
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="far fa-credit-card" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Card</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Allbanner'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  <i className="fas fa-table" ></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Banner</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Addusers'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}> <i class="fas fa-user-plus"></i>
                      </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Add Users</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>


              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer 
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
              
            >
              <div id='jj' >
               
                <div className={classes.toolbar}   />

                {/* <Link to='/Discountuser'>
                  <List>
                    <ListItem button >
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>{<Person />}</ListItemIcon>
                      <ListItemText><span style={{ color: 'white', fontWeight: 'bold' }}>Users</span></ListItemText>
                    </ListItem>
                  </List>
                </Link> */}
                <Link to='/Resturant'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="fas fa-star" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Rating</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>
                <Link to='/Ratingdescription'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="fas fa-star" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}> Description</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Description'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30,fontSize:'18px' }}>  
                       <i className="far fa-id-badge" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}> profile Info.</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>


                <Link to='/Section1'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="fas fa-table" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Section</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                
                <Link to='/Category1'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="fas fa-table" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px'}}>Category</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Allcard'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="far fa-credit-card" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px' }}>Card</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Allbanner'>
                  <List style={{padding:0}}>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                       <i className="fas fa-table" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px'}}>Banner</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>

                <Link to='/Addusers'>
                  <List>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>  
                      <i className="fas fa-user-plus"></i>       </ListItemIcon>
                      <ListItemText ><span style={{ color: 'white',fontWeight: '500',fontSize:'15px'}}>Add Users</span></ListItemText>
                    </ListItem>

                  </List>
                </Link>


              
              </div>
            </Drawer>
          </Hidden>

        </nav>

        <main className={classes.content}>

          <div className={classes.toolbar} />
          {renderPage(this.props)}
        
        </main>
      </div>
              
            )
              }
              else if(ctx.value.auth === false)
              {
                return (
                  <Login1/>
                )
              }
              else{
                return (
                <img src={require('./_food.gif')}  style={{width:'100%',height:'100vh'}} alt='gif'/>
                )
              }
            }
        }
</Context.Consumer>
    )
  }

}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {
  if (props.match.path === '/Home') {
    return (<Home />)
  }
  else if (props.match.path === '/Category1') {
    return (<Category1 />)
  }
  else if (props.match.path === '/Addrecomnd') {
    return (<Addrecomnd />)
  }
  else if (props.match.path === '/Addcard') {
    return (<Addcard />)
  }
  else if (props.match.path === '/Addcompany') {
    return (<Addcompany />)
  }
  else if (props.match.path === '/Addsection') {
    return (<Addsection />)
  }
  else if (props.match.path === '/Addbanner') {
    return (<Addbanner />)
  }
  else if (props.match.path === '/Addprofile') {
    return (<Addprofile />)
  }
  else if (props.match.path === '/Resturant') {
    return (<Resturant />)
  }
  else if (props.match.path === '/Section1') {
    return (<Section1 />)
  }
  else if (props.match.path === '/Addusers') {
    return (<Addusers />)
  }
  else if (props.match.path === '/Allcard') {
    return (<Allcard />)
  }
  else if (props.match.path === '/Description') {
    return (<Description />)
  }
  else if (props.match.path === '/Allbanner') {
    return (<Allbanner />)
  }
  else if (props.match.path === '/Ratingdescription') {
    return (<Ratingdescription />)
  }
}
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);



