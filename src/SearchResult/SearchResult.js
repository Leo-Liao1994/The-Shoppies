import React from "react"
import "./SearchResult.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const search_result = props => {
  const { img, title, year , rating, result, userInput} = props;

  return (
    <div className = "search_result-section">
      <h5 className = "result_for" > {userInput}</h5>

    <p> {result}</p>
       
      <Button variant="primary">Add to Nomination</Button>


    </div>
  )
}

export default search_result