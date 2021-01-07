import './App.css';
import { React, Component } from "react"
import  Search from "./Search/Search";
import  SearchResult from "./SearchResult/SearchResult";



class App extends Component  {
state = {
  userInput: ""
}


inputHandler = (event) => {
  this.setState( {
      userInput : `Search result for "${event.target.value}":`
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
  ></SearchResult> : <p>please search</p>
  }
  </div>
  );
  } 
}

export default App;
  