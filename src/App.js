import './App.css';
import { React, Component } from "react"
import  Search from "./Search/Search";
import  SearchResult from "./SearchResult/SearchResult";
import  NoResult from "./SearchResult/NoResult";
import axios from 'axios';



class App extends Component  {
state = {
  userInput: "", 
  result: ""
}


inputHandler = (event) => {
  axios.get(`https://www.omdbapi.com/?s=${event.target.value}&apikey=1541d577`) 
  .then(res => {
    // console.log(res.data.Search)
    this.setState({userInput: `Search result for "${event.target.value}":`})
    if(res.data.Search !== undefined){
      for(let movies of res.data.Search) {
        console.log(movies)
      this.setState( 
       { result: JSON.stringify(movies)}) 
      }
    } else this.setState({ result:"" }) 
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
    result = {this.state.result}

  ></SearchResult> : <NoResult></NoResult>
  }
  </div>
  );
  } 
}

export default App;
  