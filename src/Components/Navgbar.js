import React, { Component } from 'react'
import './Navgbar.css'
import { Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-scroll";
import About from './About';
import drocula from '../Assets/Drocula3.png'
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';

class Navgbar extends Component {
    constructor(props) {
        super(props)
        this.listener = null;
        this.state = {
            navBackground: " "

        }
    }

      componentDidMount() {
        this.listener=document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 100 ? " " : "#12162C";
    
          this.setState({ navBackground: backgroundcolor });
        });
      } 
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }   
    render() {
        return (
            <div>  
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor:"#12162C" }} className="navbarcol shadow-lg "> 
                <Navbar.Brand href="#home" style={{height:"100%"}}>
                <Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> <img  src={drocula} style={{width:"150px"}} alt="seds logo"/> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"red"}} />
                <Navbar.Collapse className="col-md-pull-3" id="responsive-navbar-nav"style={{justifyContent:"center",position:"relative",right:"5%"}}>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> HOME</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="" to="about" spy={true} smooth={true}duration={500} offset={400}> ABOUT</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"18px",fontWeight:"700"}}><Link activeClass="" to="contact" spy={true} smooth={true}duration={500} offset={10}> CONTACT</Link></Nav.Link>

                    </Navbar.Collapse>
                </Navbar>
               
                <div id="landing" ><Landing /><br /><br /></div>
                <div id="about" ><About /><br /><br /><br /><br /></div>
                <div id="contact" ><br /><br /><br /><br /><br /><br /><Contact /></div>
                <Footer />
            </div>
        )
    }
}

export default Navgbar
