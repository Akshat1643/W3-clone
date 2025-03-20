import React, { useState } from "react";
import "../styles/W3_navbar.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav"; 
const Navmodals = ({content}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
    
      <Nav.Link href="#link" onMouseEnter={handleShow}>
        {content}
      </Nav.Link>
      <Modal show={show} onMouseLeave={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{content}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eveniet iure rem sapiente unde nemo quibusdam ratione nesciunt quasi
          quos.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navmodals;
