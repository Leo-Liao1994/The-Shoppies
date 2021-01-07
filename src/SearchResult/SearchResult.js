import React from "react"
import "./SearchResult.css"
import "bootstrap/dist/css/bootstrap.min.css"

const search_result = props => {
  const { img, title, year , director, rating, description, userInput} = props;

  return (
    <div className = "search_result-section">
      <h5 className = "result_for" > {userInput}</h5>
      <li className="posts__item">
    <p>sdaad</p>
        
      </li> 


    </div>
  )
}

export default search_result