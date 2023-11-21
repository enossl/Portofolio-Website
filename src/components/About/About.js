import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Pendidikan from "./Pendidikan";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/na.jpeg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple"> 안녕 친구들~!</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid rounded-circle" />
            </Tilt>
          </Col>
        </Row>
        

        <br />
        <br />
        <h1 className="project-heading">
        <strong className="purple">Pendidikan: </strong>
        </h1>

        <Pendidikan />

       
      </Container>
    </Container>
  );
}

export default About;
