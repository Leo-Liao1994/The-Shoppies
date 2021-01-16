import React from "react"
import "./SearchResult.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const search_result = props => {
  const {  title, year, nominate,nominated,maxLimit } = props;

  return (
    <div className = "search_result-section">
      
      <Card style={{ width: '40rem', marginLeft: '400px' }}>
  <Card.Body className = 'result'>
    <Card.Title>{title}</Card.Title>
    <Card.Title>{year}</Card.Title>
    <Button  variant="custom" className = "nominate" onClick = {nominate} disabled = {nominated || maxLimit } >Nominate</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default search_result