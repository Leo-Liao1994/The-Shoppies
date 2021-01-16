
import {React, useState } from "react"
import "./Nomination.css"
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from 'react-bootstrap/Modal'


function Nomination(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className = 'nomination'>
      <Button variant="custom"  className = "nominationButton" onClick={handleShow}>
       My Nominations
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nominations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.list}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="custom" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  );
}

export default Nomination;