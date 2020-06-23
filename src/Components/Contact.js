import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
import './Contact.css';
import axios from 'axios';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             phone:'',
             message:'',
             submit:false

        }
    }
    changeHandler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler =e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://formspree.io/mnqgzyjp',this.state)
        .then(response =>{
             console.log(response)   
        })
        .catch(error =>{
            console.log(error)
        })
    }
    clickSubmit = ()=>{
        this.setState({
            submit:true
        },console.log("Thankyou for you response.")
        )
    }
    closeSubmit =()=>{
        this.setState({
            submit:false
        })
    }
    render() {
        const{name,email,phone,message,submit}=this.state
        return (
            <div>     
             <h1 className="text board" >Drop us a line</h1><br />
                <div className="form" style={{textAlign:"left",display:"inline-box",width:"100%"}}>
                <Form style={{marginRight:"25%",marginLeft:"25%",minWidth:"150px"}} onSubmit={this.submitHandler}>
                            <Form.Group controlId="formName" >
                                <Form.Label >Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group controlId="formBasicPhone">
                                <Form.Label >Phone Number</Form.Label>
                                <Form.Control type="integer" placeholder="Phone Number" name="phone" value={phone} onChange={this.changeHandler}/>
                                <Form.Text className="text-muted">
                                We'll never share your phone with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label >Message</Form.Label>
                                <Form.Control type="text" placeholder="Message" name="message" value={message} onChange={this.changeHandler}/>
                                
                            </Form.Group><br />
                            <div >
                                <Button variant="primary" type="submit" onClick={this.clickSubmit} style={{width:"150px"}}>
                                    Submit
                                </Button>
                            </div>
                            <Modal classNames={{
                                animationIn: 'customEnterAnimation',
                                animationOut: 'customLeaveAnimation',
                                }} animationDuration={1000}  open={submit} onClose={this.closeSubmit} blockScroll={false} center >
                            <br />
                            <h2 className="text">Thankyou for your response</h2>
                            
                            </Modal>
                            </Form>
                </div>
                
                <br /><br /><br />
            </div>
        )
    }
}

export default Contact
