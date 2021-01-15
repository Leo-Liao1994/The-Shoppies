import './App.css';
import { React, Component } from "react"
import Alert from 'react-bootstrap/Button'
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
  nomination : [],
  showAlert: false
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
    } 
  })
}

nominateHandler = (index) => {
   const nomination= [...this.state.nomination]; 
   const result = [...this.state.result]
   result[index].nominated = true;
   nomination.push(this.state.result[index])
   this.setState({nomination: nomination, result: result}) 
   if(this.state.nomination.length >= 4) {
    this.setState({showAlert: true})
   } 
  }

removeNominationHandler = (index) => {
  const nomination= [...this.state.nomination]; 
  const result = [...this.state.result]
  result[result.indexOf(nomination[index])].nominated = false;
   nomination.splice(index,1)
  this.setState({nomination: nomination,result: result}) 
  if(this.state.nomination.length <= 5) {
    this.setState({showAlert: false})
   } 
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
     <Nomination 
    list = {nominateList}
    >
    </Nomination>
    <Search 
    input = {this.inputHandler} 
    ></Search>
    {search}
    { this.state.showAlert? 
    <Alert className = 'alert' variant='success' >
    You have reached the maximum number of nomination! Thank you! 
    </Alert> : null
    }
    {results}
   
  </div>
  );
  } 
}

export default App;