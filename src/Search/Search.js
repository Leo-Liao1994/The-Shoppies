import React from "react"
import "./Search.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'

const search = props => {
  return (
    <div className = "search-section">
      <p className = "title">Movie awards for entrepreneurs </p>
      <input placeholder = "Find your favourite movies" 
      onChange = {props.input}></input>
    </div>
  )
}

export default search