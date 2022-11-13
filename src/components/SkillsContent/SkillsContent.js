import './SkillsContent.css'
import { Col, Row } from 'react-bootstrap'
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass
} from "react-icons/di";
import {
  SiFirebase,
  SiCss3,
  SiBootstrap
} from "react-icons/si";
import { FaHtml5 } from 'react-icons/fa'
import { BsWordpress } from 'react-icons/bs'

import React from 'react'

function SkillsContent() {
  return (
    <div className='container'>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <FaHtml5/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCss3/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBootstrap/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiSass/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <BsWordpress />
        </Col>
        </Row>
    </div>
    
  );
}

export default SkillsContent