import React from "react"
import "./Search.css"
import "bootstrap/dist/css/bootstrap.min.css"

const search = props => {
  return (
    <div className = "search-section">
      <p className = "title">The Shoppies</p>
      <input placeholder = "find your favourite movies" 
      onChange = {props.input}></input>
    </div>
  )
}

export default search