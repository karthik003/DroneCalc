import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Row,Col } from 'react-bootstrap';
import './Input.css'
import ScrollIntoView from 'react-scroll-into-view'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
             motorrate:'',
             batteryvolt:'',
             propdiam:'',
             proppitch:'',
             forwardvel:'',
             motorstallcur:'',
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
             motorrateable:false,
             batteryvoltable:false,
             propdiamable:false,
             proppitchable:false,
             forwardvelable:false,
             motorstallcurable:false,
             display:' '

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

        if(this.state.battery!== '' && this.state.weight!=='' && this.state.current!==''){
            this.setState({
                display:<>{"Output = "+((this.state.battery * 0.8 * 60)/(1000*this.state.weight*this.state.current)).toFixed(2) +" min"}<br />
                <p style={{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}}>Remarks</p>
                <ul>
                    <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Expected Flight Time based on all-up weight when hovering only.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Battery Discharge Percentage is assumed to be 80%.</i></li>
                </ul></>
            })
        }
        else if(this.state.battery!== '' && this.state.maxcurrent!=='' && this.state.motors!==''){
            this.setState({
                display:<>{"Output = "+((this.state.battery * 0.8 * 60)/(1000*this.state.maxcurrent*this.state.motors)).toFixed(2) +" min"}<br />
              <p style={{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}}>Remarks</p>
                <ul>
                    <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Expected Min. Flight Time is based on maximum throttle and is independent of weight.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Battery Discharge Percentage is assumed to be 80%.</i></li>
                </ul>
              </>  
            })
        }
        else if(this.state.weight!== '' && this.state.motordistance!=='' && this.state.propradius!==''&& this.state.twratio!==''&& this.state.rotors!==''){
            this.setState({
                display:<>{"Output = "+(((1-1/(this.state.twratio)**2)**0.25)*(3.55* this.state.twratio)*((this.state.weight/(0.5*(this.state.motordistance**2) + (this.state.rotors -1)*(3.14*(this.state.propradius**2) )) )**0.5)).toFixed(2) +" m/s"}
                    <p style={{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}}>Remarks</p>
                <ul>
                    <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Theoretically Max. attainable forward speed in flight at max throttle(neglecting copter aerodynamic drag and down force due to tilt,may vary with altitude).</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Density of air is considered to be 1.22 kg/m^3.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Thrust to weight ratio is taken to be 2 if entered otherwise.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Standard Air Drag is assumed to be 1.3 .</i></li>

                </ul>
                    
                </>
            })
        }
        else if (this.state.speed!== '' && this.state.time!==''){
            this.setState({
                display:<>{"Output = "+(this.state.speed*this.state.time*60).toFixed(2) +" m"}
                     <p style={{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}}>Remarks</p>
                <ul>
                    <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Represents the max Range considering standard drag.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Real values may differ depending on the real drag.</i></li>
                </ul>
                </>
            })
        }
        else if( this.state.propdiam!== '' && this.state.proppitch!=='' && this.state.forwardvel!==''&& this.state.motorrate!==''&& this.state.batteryvolt!==''){
            this.setState({
                display:<>{"Output = "+ ((0.00000004392399* this.state.motorrate*this.state.batteryvolt)*(this.state.propdiam**3.5/this.state.proppitch**0.5)*((0.00042333*this.state.motorrate*this.state.batteryvolt*this.state.proppitch)- this.state.forwardvel)).toFixed(2)+ " "}
                     <p style={{color:"green",fontFamily:"courier",fontSize:"26px",textAlign:"left",marginLeft:"17px"}}>Remarks</p>
                <ul>
                    <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>The calculated thrust is for a single motor.You need to multiply it with the no. of motrs to get thrust for the entire drone.</i></li>
                    <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>Enter Forward velocity = 0, if you want to calculate static thrust.</i></li>
                </ul>
                </>
            })
        }
        else if (this.state.motorrate!== '' && this.state.batteryvolt!==''){
            this.setState({
                display:"Output = "+(this.state.motorrate*this.state.batteryvolt).toFixed(2) +" "
            })
        }
        else if (this.state.motorstallcur!== '' && this.state.battery!==''){
            this.setState({
                display:"Output = "+(this.state.motorstallcur*1000*this.state.motors/this.state.battery).toFixed(2) +" "
            })
        }
        else{
            this.setState({
                display:<><p style={{color:"red",fontFamily:"courier",fontSize:"26px"}}>Error</p>
                        <ul>
                            <li style={{color:"grey",fontFamily:"courier",fontSize:"20px",textAlign:"left"}}><i>You probably didn't enter all the values.</i></li>
                            <li style={{color:"grey" ,fontFamily:"courier",fontSize:"20px"}}><i>You didn't click on which of the given outputs you want.</i></li>
                        </ul></>
            })
        }
        
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
            maxcurrent:'',
            motors:'',
            motordistance:'',
            propradius:'',
            twratio:'',
            rotors:'',
            speed:'',
            time:'',
            motorrate:'',
            batteryvolt:'',
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            motorstall:'',
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
            motorrateable:true,
            batteryvoltable:true,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:true,   
        })
    }
    timeHandler =() =>{
        this.setState({
            weight:'',
            current:'',
            motordistance:'',
            propradius:'',
            twratio:'',
            rotors:'',
            speed:'',
            time:'',
            motorrate:'',
            batteryvolt:'',
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            motorstall:'',
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
            motorrateable:true,
            batteryvoltable:true,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:true,   
        })
    }
    speedHandler =()=>{
        this.setState({
            battery:'',
            current:'',
            maxcurrent:'',
            motors:'',
            motorrate:'',
            batteryvolt:'',
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            motorstall:'',
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
            motorrateable:true,
            batteryvoltable:true,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:true,   
        })
    }
    rangeHandler= () =>{
        this.setState({
            battery:'',
            weight:'',
            current:'',
            maxcurrent:'',
            motors:'',
            motordistance:'',
            propradius:'',
            twratio:'',
            rotors:'',
            motorrate:'',
            batteryvolt:'',
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            motorstall:'',
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
            motorrateable:true,
            batteryvoltable:true,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:true,   
        })
    }
    thrustHandler =()=>{
        this.setState({
            battery:'',
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
            motorstall:'',
            batteryable:true,
            weightable:true,
            currentable:true,
            maxcurrentable:true,
            motorsable:true,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:true,
            timeable:true,
            motorrateable:false,
            batteryvoltable:false,
            propdiamable:false,
            proppitchable:false,
            forwardvelable:false,
            motorstallcurable:true,    
        })
    }
    rpmHandler =()=>{
        this.setState({
            battery:'',
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
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            motorstall:'',
            batteryable:true,
            weightable:true,
            currentable:true,
            maxcurrentable:true,
            motorsable:true,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:true,
            timeable:true,
            motorrateable:false,
            batteryvoltable:false,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:true,  
        })
    }
    cRateHandler =()=>{
        this.setState({
            weight:'',
            current:'',
            maxcurrent:'',
            motordistance:'',
            propradius:'',
            twratio:'',
            rotors:'',
            speed:'',
            time:'',
            motorrate:'',
            batteryvolt:'',
            propdiam:'',
            proppitch:'',
            forwardvel:'',
            batteryable:false,
            weightable:true,
            currentable:true,
            maxcurrentable:true,
            motorsable:false,
            motordistanceable:true,
            propradiusable:true,
            twratioable:true,
            rotorsable:true,
            speedable:true,
            timeable:true,
            motorrateable:true,
            batteryvoltable:true,
            propdiamable:true,
            proppitchable:true,
            forwardvelable:true,
            motorstallcurable:false,   
        })
    }
    render() {
        const{battery,weight,current,maxcurrent,motors,motordistance,propradius,twratio,rotors,speed,time,motorrate,batteryvolt,propdiam
            ,proppitch,forwardvel,motorstallcur,submit,batteryable,weightable,timeable,speedable,rotorsable,twratioable,propradiusable,motordistanceable,motorsable
        ,maxcurrentable,currentable,motorrateable,batteryvoltable,propdiamable,proppitchable,forwardvelable,motorstallcurable,display}=this.state
        const closeIcon = (
            <FontAwesomeIcon icon={faTimes} />
          )        
        return (
            <>
            <div className="jumbotron inpbutton" style={{width:"21%",backgroundColor:"white",paddingTop:"200px"}}>
            <ScrollIntoView selector="#allinputs">
                <Button variant="primary" type="submit" onClick={this.hoverHandler}  style={{minWidth:"135px",display:"inline-block"}}>Hover Flight Time (min)</Button><br /><br />
               
                <Button variant="primary" type="submit" onClick={this.timeHandler} style={{minWidth:"135px"}}>Minimum Flight Time (min)</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.speedHandler}  style={{minWidth:"135px"}}>Max Forward Flight Speed (m/s)</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.rangeHandler}  style={{minWidth:"135px"}}>Estimated Range (m)</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.thrustHandler}  style={{minWidth:"135px"}}>Static/Dynamic Thrust (N)</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.rpmHandler}  style={{minWidth:"135px"}}>RPM</Button><br /><br />
                <Button variant="primary" type="submit" onClick={this.cRateHandler}  style={{minWidth:"135px"}}>C-Rating of the battery (C)</Button>

         </ScrollIntoView> 
            </div>
            <div id="allinputs" className="jumbotron inpfield" style={{textAlign:"left",width:"79%",backgroundColor:"white"}}>
               
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicbattery">
                            <Form.Label>Battery Capacity (mAh) </Form.Label>
                            <Form.Control type="number" placeholder="Battery Capacity" name="battery" value={battery} onChange={this.changeHandler} disabled={batteryable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicWeigth">
                            <Form.Label>All Up Weight (Kg)</Form.Label>
                            <Form.Control type="number" placeholder="All Up Weight" name="weight" value={weight} onChange={this.changeHandler} disabled={weightable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicCurrent">
                            <Form.Label>Current to lift 1kg (A)</Form.Label>
                            <Form.Control type="number" placeholder="Current to lift 1kg" name="current" value={current} onChange={this.changeHandler} disabled={currentable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicMaxCurrent">
                            <Form.Label>Max Current drawn by 1 Motor (A)</Form.Label>
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
                            <Form.Label>Motor to Motor Distance (m)</Form.Label>
                            <Form.Control type="number" placeholder="Motor to Motor Distance" name="motordistance" value={motordistance} onChange={this.changeHandler} disabled={motordistanceable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicRadius">
                            <Form.Label>Radius of Propellor (m)</Form.Label>
                            <Form.Control type="number" placeholder="Radius of Propellor" name="propradius" value={propradius} onChange={this.changeHandler} disabled={propradiusable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicThrust">
                            <Form.Label>Thrust to Weight Ratio (N/Kg)</Form.Label>
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
                            <Form.Label>Max forward Flight Speed (m/s)</Form.Label>
                            <Form.Control type="number" placeholder="Max forward Flight Speed" name="speed" value={speed} onChange={this.changeHandler} disabled={speedable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label>Flight Time (s)</Form.Label>
                            <Form.Control type="number" placeholder="Flight Time" name="time" value={time} onChange={this.changeHandler} disabled={timeable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicmotorRate">
                            <Form.Label>Motor rating (kV)</Form.Label>
                            <Form.Control type="number" placeholder="Motor rating" name="motorrate" value={motorrate} onChange={this.changeHandler} disabled={motorrateable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicbatteryvolt">
                            <Form.Label>Battery Voltage (V)</Form.Label>
                            <Form.Control type="number" placeholder="Battery Voltage" name="batteryvolt" value={batteryvolt} onChange={this.changeHandler} disabled={batteryvoltable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicpropdiam">
                            <Form.Label>Diameter of Propellor (inches) </Form.Label>
                            <Form.Control type="number" placeholder="Diameter of Propellor" name="propdiam" value={propdiam} onChange={this.changeHandler} disabled={propdiamable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicproppitch">
                            <Form.Label> Pitch of Propellor (inches)</Form.Label>
                            <Form.Control type="number" placeholder="Pitch of Propellor" name="proppitch" value={proppitch} onChange={this.changeHandler} disabled={proppitchable}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicForwardvel">
                            <Form.Label>Forward Velocity (m/s)</Form.Label>
                            <Form.Control type="number" placeholder="Forward Velocity" name="forwardvel" value={forwardvel} onChange={this.changeHandler} disabled={forwardvelable}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicmotorstallcur">
                            <Form.Label> Motor Stall Current (A)</Form.Label>
                            <Form.Control type="number" placeholder="Motor Stall Current" name="motorstallcur" value={motorstallcur} onChange={this.changeHandler} disabled={motorstallcurable}/>
                        </Form.Group>
                    </Col>
                </Row>
                    <div style={{margin:"auto",width:"100%",textAlign:'left'}}>
                        <Button variant="success" type="submit" onClick={this.clickSubmit} style={{width:"150px"}} >
                            Submit
                        </Button>
                    </div>
                    <Modal classNames={{
                                animationIn: 'customEnterAnimation',
                                animationOut: 'customLeaveAnimation',
                                }} animationDuration={1000}  open={submit} onClose={this.closeSubmit} blockScroll={false} center closeIcon={closeIcon} >
                            <br />
                            <h2 className="text">{display}</h2>
                            
                    </Modal>
                </Form>
            </div>
            
            </>
        )
    }
}


export default Input
