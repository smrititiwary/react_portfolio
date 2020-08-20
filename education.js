import React, { Component } from "react"
import {Container, Row, Col} from 'react-bootstrap'

export default class Education extends Component{
    render(){
        return(
            <div>
                <Container>
                <br></br>
            <Row>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            <Col><p className="text-center">EDUCATION</p></Col>
            <Col><hr style={{height: "1px", backgroundColor: "grey"}}/></Col>
            </Row>
            <Row>
            <Col className="text-left" md={4}  xs={4}>
                <p className="font-weight-bold text-secondary">2017-2021</p>
            </Col>
            <Col md={6} xs={6}>
                <p className="text-left">
                    <strong>Trident Academy of Technology, Bhubaneswar, Odisha</strong><br/>
                    B.Tech, Information Technology<br/>
                    <span class="font-italic">CGPA : 8.66</span>
                </p>
            </Col>
            <Col></Col>
            </Row>
            <Row>
            <Col className="text-left" md={4} xs={4}>
                <p className="font-weight-bold text-secondary">2015-2017</p>
            </Col>
            <Col md={6} xs={6}>
                <p className="text-left">
                        <strong>S.D.S.M. School For Excllence,Jamshedpur</strong><br/>
                        Intermediate<br/>
                        <span class="font-italic">Percentage: 72</span>
                    </p>
            </Col>
            <Col></Col>
            </Row>
            <Row>
            <Col className="text-left" md={4} xs={4}>
                <p className="font-weight-bold text-secondary">2015</p>
            </Col>
            <Col md={6} xs={6}>
                <p className="text-left">
                        <strong>Kendriya Vidyalaya Coochbehar,West Bengal</strong><br/>
                        High School<br/>
                        <span class="font-italic">Percentage: 86</span>
                    </p>
            </Col>
            <Col></Col>
            </Row>
            </Container>
            </div>
        )
    }

}