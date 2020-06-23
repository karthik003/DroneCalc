import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div >
                <p className="text">ABOUT US</p>
                This website is built by a team of highly dedicated aviation enthusiasts.
                <div className=" "style={{margin:"auto",width:"50%"}}>
                    <Table responsive style={{border:"2px solid #E1E1E1",textAlign:"center"}}>

                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>College</th>
                            <th>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody >
                            <td colspan="3" style={{fontFamily:"courier",fontSize:"20px",fontWeight:"600",textAlign:'left'}}>ELECTRICAL TEAM</td>
                            <tr >
                            <td>Abhishek Tyagi</td>
                            <td>VIT, Vellore</td>
                            <td><a href="mailto:abhityagi1224@gmail.com">abhityagi1224@gmail.com</a></td>

                            </tr>
                            <tr>
                            <td>Shwetanshu</td>
                            <td>VIT, Vellore</td>
                            <td><a href="mailto:shwetanshu0511@gmail.com">shwetanshu0511@gmail.com</a></td>

                            </tr>
                            <tr>
                            <td>Karthik Rajesh</td>
                            <td>VIT, Vellore</td>
                            <td><a href="mailto:karthik06082000@gmail.com">karthik06082000@gmail.com</a></td>

                            </tr>
                            <td colspan="3" style={{fontFamily:"courier",fontSize:"20px",fontWeight:"600",textAlign:'left'}}>COMPUTER SCIENCE TEAM</td>
                            <tr>
                            <td>V.J. Karthik</td>
                            <td>VIT, Vellore</td>
                            <td><a href="mailto:vjk2018@gmail.com">vjk2018@gmail.com</a></td>

                            </tr>
                            <tr>
                            <td>Roopesh A</td>
                            <td>VIT, Vellore</td>
                            <td><a href="mailto:arvapalli12345@gmail.com">arvapalli12345@gmail.com</a></td>

                            </tr>
                        </tbody>

                </Table>
                </div>
                
            </div>
        )
    }
}

export default About
