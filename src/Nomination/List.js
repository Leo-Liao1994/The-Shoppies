
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import "./List.css"

const list = props => {
  return (
   <div>
     <ListGroup >
     <p> {props.nominateTitle}
      <Button variant="custom" className = "nominate" onClick = {props.removeNomination}>Remove</Button>
      </p>
      </ListGroup>
   </div>
  )
}

export default list


