
import {React, useState } from "react"
import "./Nomination.css"
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'


function Nomination(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning"  className = "nominationButton" onClick={handleShow}>
        Nominations
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
        <ListGroup as="ul">
    <ListGroup.Item as="li" >
      {props.nominateTitle}
      </ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nomination;