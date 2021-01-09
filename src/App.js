import './App.css';
import { React, Component } from "react"
import  Search from "./Search/Search";
import  SearchResult from "./SearchResult/SearchResult";
import  NoResult from "./SearchResult/NoResult";
import axios from 'axios';



class App extends Component  {
state = {
  userInput: "", 
  result: {title: ""}
}


inputHandler = (event) => {
  this.setState( {
      userInput : `Search result for "${event.target.value}":`
  }) 

  axios.get(`https://www.omdbapi.com/?s=${event.target.value}&apikey=1541d577`) 
.then(res => {
  this.setState( 
    {
      
    }
  )
})
}



render (){

 
  return (
  <div className="App">
    <Search 
    input = {this.inputHandler} 
    ></Search>
  { this.state.userInput.length >= 22 ?
    <SearchResult 
    userInput = {this.state.userInput}
    title = {this.state.result.title}

  ></SearchResult> : <NoResult></NoResult>
  }
  </div>
  );
  } 
}

export default App;
  