import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'


export default class Hobby extends Component{
    render(){
        return(
            <div>
            <Container>
                <br></br>
                <br></br>
            <Row>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            <Col><p class="text-center">WORK EXPERIENCE</p></Col>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">June 2020 - August 2020</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left">
                            <strong>Tech Member</strong><br/>
                            Infovue<br/>
                            <em>Manage team. And work as a debugger.</em></p>
                    </Col>
            </Row>
            <Row>
                    <Col className="text-left" md={4}  xs={4}>
                        <p className="font-weight-bold text-secondary">August 2020 - Present</p>
                    </Col>
                    <Col md={6} xs={6} >
                        <p className="text-left"><strong>Summer Internship</strong><br/>
                        Adore<br/>
                        <em>Internship on AI,ML</em></p>
                    </Col>
            </Row>
            
            </Container>
        </div>
            
        )
    }

}