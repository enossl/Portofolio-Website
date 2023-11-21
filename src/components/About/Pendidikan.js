import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";
import { IoIosSchool } from "react-icons/io";

function Pendidikan() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <FaSchoolFlag />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SD Negeri Kamal 03
          <br />
          2009-2015
        </h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SMP Negeri 190 Jakarta
          <br />
          2015-2018
        </h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <BiSolidSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          SMA Negeri 95 Jakarta
          <br />
          2018-2021
        </h1>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <IoIosSchool />
        <h1 style={{ fontSize: "15px", paddingBottom: "20px" }}>
          Universitas Gunadarma
          <br />
          2021-Sekarang
        </h1>
      </Col>
      
    </Row>
  );
}

export default Pendidikan;
