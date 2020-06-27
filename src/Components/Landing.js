import React, { Component } from 'react'
import './Landing.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input'
import ScrollIntoView from 'react-scroll-into-view'

class Landing extends Component {
    render() {
        return (
            <>
            <div className="landing">
                <ScrollIntoView selector="#input">
                    <Button className="calculate" style={{borderRadius:"25px"}}size="lg">Calculate</Button>
                </ScrollIntoView>
            </div>
            <div style={{width:"100%"}} id="input">
                <p className="text">CALCULATE</p>
            <Input />
            </div>
            <br />
            <br /><br />
            </>
        )
    }
}

export default Landing
