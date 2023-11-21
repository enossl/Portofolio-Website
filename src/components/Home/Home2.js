import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/coding.svg";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Skill </span>
            </h1>
            <Techstack />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me</h1>
            <p>
              Walaupun tidak banyak, silahkan <span className="purple">difollow </span>social media saya
            </p>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/enossl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/enosusilo?igshid=MzMyNGUyNmU2YQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
