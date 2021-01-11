import React from "react"
import "./SearchResult.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const search_result = props => {
  const { img, title, year , rating, userInput} = props;

  return (
    <div className = "search_result-section">
      <h5 className = "result_for" > {userInput}</h5>

      <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src= "img" /> */}
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Title>{year}</Card.Title>
    <Button variant="primary">Add to Nomination</Button>

  </Card.Body>
</Card>



    </div>
  )
}

export default search_result