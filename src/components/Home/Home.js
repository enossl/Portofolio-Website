import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/사진.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                어서와~{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              <p>It's me!</p>
                <strong className="main-name">Ayu Retnoningrum Susilo</strong>
              </h1>
              <h1 className="heading-name2">
                Seorang mahasiswa di Universitas Gunadarma.
              </h1>
              <p className="home-about-body">
              Kali ini saya membuat project web dengan 
              <i>
                <b className="purple"> react.js. </b>
              </i>
              <br />
              <br />
              Tujuan project ini adalah untuk memenuhi sebagian syarat kelulusan praktikum Pemrograman WEB
              <br />
              <br />
              but... FYI aja <i><b> I WANT HOLIDAY!</b></i>&#128134;
            </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
