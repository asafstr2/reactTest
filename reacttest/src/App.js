import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValComp from './ValComp/ValComp';
import CharComp from './CharComp/CharComp';
import Radium from "radium";

class App extends Component {
  state ={
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showLength:0,
    showLetter:""
  }

  nameChangedHandler = ( event, id ) => {
     let persons=this.state.persons;
    const personIndex = persons.findIndex(p =>  p.id === id);

    const person = { ...persons[personIndex] };

    person.name = event.target.value;

    const copyPersons = [...persons];
    copyPersons[personIndex] = person;
    
    this.setState( {persons: copyPersons} );
  }

  deletePersonHandler = (personIndex) => {
    let persons=this.state.persons;
    const copyPersons = [...persons];
    copyPersons.splice(personIndex, 1);
    this.setState({persons: copyPersons});
  }
  lengthChangedHandler= event=> {
    let realShowLength=event.target.value.length
    let showLetter=event.target.value
    this.setState({showLength:realShowLength,showLetter:showLetter})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  
  
    deleteWordHandler = (wordIndex) => {
    let word=this.state.showLetter.slice("");
    const copyWord = [...word];
    copyWord.splice(wordIndex, 1);
      let copyOfLenght=copyWord.length
 
      console.log(copyOfLenght)
    this.setState({showLetter: copyWord.join(''),showLength:copyOfLenght});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
  
    
   

let charComp=(
  <div>
  {this.state.showLetter.split("").map((letter,index) =>{
    return <CharComp 
    showLetter={letter} key={index}
    click={() => this.deleteWordHandler(index) }

  
  />}

  )}
  
 </div>
);
 

      let persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

   if ( this.state.showPersons ) {
     persons = null;
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      <ValComp  showLength={this.state.showLength}/>
     <div>
      <input onChange={(event) => this.lengthChangedHandler(event)} value={this.state.showLetter} />
    </div>
{charComp}

</div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
