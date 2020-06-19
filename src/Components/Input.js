import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Row,Col } from 'react-bootstrap';
import './Input.css'
import ScrollIntoView from 'react-scroll-into-view'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             battery: '',
             weight:'',
             current:'',
             maxcurrent:'',
             motors:'',
             motordistance:'',
             propradius:'',
             twratio:'',
             rotors:'',
             speed:'',
             time:'',
             submit:false,
             batteryable:false,
             weightable:false,
             currentable:false,
             maxcurrentable:false,
             motorsable:false,
             motordistanceable:false,
             propradiusable:false,
             twratioable:false,
             rotorsable:false,
             speedable:false,
             timeable:false,   

        }
    }
    changeHandler = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
       
    }
    clickSubmit =() =>{
        this.setState({
            submit:true
        },console.log("Check Output Below"))
    }
    closeSubmit =()=>{
        this.setState({
            submit:false
        })
    }
    hoverHandler= () =>{
        this.setState({
            batteryable:false,
            weightable:false,
            currentable:false,
            maxcurrentable:true,
            motorsable:true,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:true,
            timeable:true,   
        })
    }
    timeHandler =() =>{
        this.setState({
            batteryable:false,
            weightable:true,
            currentable:true,
            maxcurrentable:false,
            motorsable:false,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:true,
            timeable:true,   
        })
    }
    speedHandler =()=>{
        this.setState({
            batteryable:true,
            weightable:false,
            currentable:true,
            maxcurrentable:true,
            motorsable:true,
            motordistanceable:false,
            propradiusable:false,
            twratioable:false,
            rotorsable:false,
            speedable:true,
            timeable:true,   
        })
    }
    rangeHandler= () =>{
        this.setState({
            batteryable:true,
            weightable:true,
            currentable:true,
            maxcurrentable:true,
            motorsable:true,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:false,
            timeable:false,   
        })
    }
    render() {
        const{battery,weight,current,maxcurrent,motors,motordistance,propradius,twratio,rotors,speed,time,submit,
            batteryable,weightable,timeable,speedable,rotorsable,twratioable,propradiusable,motordistanceable,motorsable
        ,maxcurrentable,currentable}=this.state

        return (
            <>
            <div className="jumbotron inpbutton" style={{width:"20%",backgroundColor:"white"}}>
            <ScrollIntoView selector="#allinputs">
                <Button variant="primary" type="submit" onClick={this.hoverHandler}  style={{minWidth:"135px",display:"inline-block"}}>Hover Flight Time</Button><br /><br />
               
                <Button variant="primary" type="submit" onClick={this.timeHandler} style={{minWidth:"135px"}}>Minimum Flight Time</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.speedHandler}  style={{minWidth:"135px"}}>Max Forward Flight Speed</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.rangeHandler}  style={{minWidth:"135px"}}>Estimated Range</Button>
         </ScrollIntoView> 
            </div>
            <div id="allinputs" className="jumbotron inpfield" style={{textAlign:"left",width:"80%",backgroundColor:"white"}}>
               
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicbattery">
                            <Form.Label>Battery Capacity</Form.Label>
                            <Form.Control type="number" placeholder="Battery Capacity" name="battery" value={battery} onChange={this.changeHandler} disabled={batteryable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicWeigth">
                            <Form.Label>All Up Weight</Form.Label>
                            <Form.Control type="number" placeholder="All Up Weight" name="weight" value={weight} onChange={this.changeHandler} disabled={weightable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicCurrent">
                            <Form.Label>Current to lift 1kg</Form.Label>
                            <Form.Control type="number" placeholder="Current to lift 1kg" name="current" value={current} onChange={this.changeHandler} disabled={currentable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicMaxCurrent">
                            <Form.Label>Max Current drawn by 1 Motor</Form.Label>
                            <Form.Control type="number" placeholder="Max Current drawn by 1 Motor" name="maxcurrent" value={maxcurrent} onChange={this.changeHandler} disabled={maxcurrentable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicMotors">
                            <Form.Label>No. of Motors</Form.Label>
                            <Form.Control type="number" placeholder="No. of Motors" name="motors" value={motors} onChange={this.changeHandler} disabled={motorsable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicMotorDist">
                            <Form.Label>Motor to Motor Distance</Form.Label>
                            <Form.Control type="number" placeholder="Motor to Motor Distance" name="motordistance" value={motordistance} onChange={this.changeHandler} disabled={motordistanceable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicRadius">
                            <Form.Label>Radius of Propellor</Form.Label>
                            <Form.Control type="number" placeholder="Radius of Propellor" name="propradius" value={propradius} onChange={this.changeHandler} disabled={propradiusable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicThrust">
                            <Form.Label>Thrust to Weight Ratio</Form.Label>
                            <Form.Control type="number" placeholder="Thrust to Weight Ratio"name="twratio" value={twratio} onChange={this.changeHandler} disabled={twratioable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicRotors">
                            <Form.Label>No. Of Rotors</Form.Label>
                            <Form.Control type="number" placeholder="No. Of Rotors" name="rotors" value={rotors} onChange={this.changeHandler} disabled={rotorsable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicFlight">
                            <Form.Label>Max forward Flight Speed</Form.Label>
                            <Form.Control type="number" placeholder="Max forward Flight Speed" name="speed" value={speed} onChange={this.changeHandler} disabled={speedable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label>Flight Time</Form.Label>
                            <Form.Control type="number" placeholder="Flight Time" name="time" value={time} onChange={this.changeHandler} disabled={timeable}/>
                        </Form.Group>
                    </Col>
                </Row>
                    <div style={{margin:"auto",width:"100%",textAlign:'center'}}>
                        <Button variant="success" type="submit" onClick={this.clickSubmit} style={{width:"150px"}} >
                            Submit
                        </Button>
                    </div>
                    <Modal classNames={{
                                animationIn: 'customEnterAnimation',
                                animationOut: 'customLeaveAnimation',
                                }} animationDuration={1000}  open={submit} onClose={this.closeSubmit} blockScroll={false} center >
                            <br />
                            <h2 className="text">Output ={5+98}</h2>
                            
                            </Modal>
                </Form>
            </div>
            
            </>
        )
    }
}

export default Input
