import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Silahkan panggil saya <span className="purple">Ayu</span>! 
            Nama lengkap saya adalah <span className="purple">Ayu Retnoningrum Susilo</span>.
            <br/>Saya adalah seorang mahasiswa <span className="purple">Teknik Informatika</span> di salah satu kampus swasta di Jakarta, yaitu<span className="purple"> Universitas Gunadarma </span>
            Ini adalah semester ke 5 saya sebagai seorang mahasiswi <span className="purple">Teknik Informatika</span>.
            
            <br />
            
          <br /><h1 className="project-heading">
            <strong className="purple">Hobi: </strong>
          </h1>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Menonton Drama &#128512;
            </li>
            <li className="about-activity">
              <ImPointRight /> Makan &#129316;
            </li>
            <li className="about-activity">
              <ImPointRight /> Tidur &#128564;
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
