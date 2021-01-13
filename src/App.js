import './App.css';
import { React, Component } from "react"
import  Search from "./Search/Search";
import  Nomination from "./Nomination/Nomination";
import  SearchResult from "./SearchResult/SearchResult";
import  NoResult from "./SearchResult/NoResult";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;


class App extends Component  {
state = {
  userInput: "", 
  result: [{id:'', Title: '', Year: ''}], 
  nomination : []
}

inputHandler = (event) => {
  
  let moviesResult = []
  axios.get(`https://www.omdbapi.com/?s=${event.target.value}&apikey=${API_KEY}`) 
  .then(res => {
    this.setState({userInput: `Search result for "${event.target.value}":`})
    if(res.data.Search !== undefined){
      for(let movies of res.data.Search.slice(0,8)) {
        moviesResult.push(movies)
      }
      this.setState( 
        {result: moviesResult}) 
    } else this.setState( 
      {result: [{id:"", Title: '', Year: ''}]}) 
  })
}

nominateHandler = (index) => {
   const  nomination= [...this.state.nomination]; 
   nomination.push(this.state.result[index].Title) 
   this.setState({nomination: nomination}) 
}


render (){

  let results = null; 
  let search = null; 

      const resultState = (result,index) => {
        if(result.Title !== "") {
        return <SearchResult
        id = {result.imdbID}
        title = {result.Title}
        year = {`(${result.Year})`} 
        nominate = {() => this.nominateHandler(index)}
        /> 
        }
      }

      if( this.state.userInput.length >= 22) {
       search = (
       <h5 className = "result_for" > {this.state.userInput}</h5>)

      results = (
          <div >
            {this.state.result.map(resultState)}
          </div> 
      )} else results = <NoResult></NoResult>

 
  return (
  <div className="App">
    <Search 
    input = {this.inputHandler} 
    ></Search>
    {search}
    {results}
    <Nomination 
    nomination = {this.state.nomination}
    ></Nomination>
  </div>
  );
  } 
}

export default App;
  