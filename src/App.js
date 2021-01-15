import './App.css';
import { React, Component } from "react"
import  Search from "./Search/Search";
import  Nomination from "./Nomination/Nomination";
import  SearchResult from "./SearchResult/SearchResult";
import  NoResult from "./SearchResult/NoResult";
import  List from "./Nomination/List";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;


class App extends Component  {
state = {
  userInput: "", 
  result: [], 
  nomination : []
}

inputHandler = (event) => {
let moviesResult = []
  axios.get(`https://www.omdbapi.com/?s=${event.target.value}&apikey=1541d577`) 
  .then(res => {
    this.setState({userInput: `Search result for "${event.target.value}":`})
    if(res.data.Search !== undefined){
      for(let movies of res.data.Search.slice(0,6)) {
        movies.nominated = false
        moviesResult.push(movies)
       }
      this.setState( 
        {result: moviesResult}) 
    } else this.setState( 
      {result: [{id:'', Title: '', Year: ''}]}) 
  })
}

nominateHandler = (index) => {
   const nomination= [...this.state.nomination]; 
   const result = [...this.state.result]
   result[index].nominated = true;
   nomination.push(this.state.result[index])
   this.setState({nomination: nomination, result: result})
   console.log(index)
  }

removeNominationHandler = (index) => {
  const nomination= [...this.state.nomination]; 
  const result = [...this.state.result]
  result[result.indexOf(nomination[index])].nominated = false;
   nomination.splice(index,1)
  this.setState({nomination: nomination,result: result}) 
}


render (){

  let results = null; 
  let search = null; 
  let nominateList = null; 


      const resultState = (result,index) => {
        if(result.Title !== "") {
        return <SearchResult
        id = {result.imdbID}
        title = {result.Title}
        year = {`(${result.Year})`} 
        nominated = {result.nominated}
        nominate = {() => this.nominateHandler(index)}
        maxLimit = {this.state.nomination.length >= 5? true : false}
        /> 
        }  
      }

      const nominationState = (list, index) => {
        return <List 
        id = {list.imdbID}
        nominateTitle = {list.Title}
        removeNomination = {() => this.removeNominationHandler(index)}
        />  
      }

      nominateList = ( 
      <div >
        {this.state.nomination.map(nominationState)}
      </div>)
      
      

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
    list = {nominateList}
    >
    </Nomination>
  </div>
  );
  } 
}

export default App;