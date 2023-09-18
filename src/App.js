import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {data} from "./data";

function App() {
  const [people, setPeople] = useState(data)

  const removeItem = (id)=> {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div className="App">
     {people.map((person) => {
      const {id, name} = person;
      return (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button className="btn" onClick={() => removeItem(id)}>remove</button>
          </div>
      )
     })}
      <button className="btn2" onClick={() => setPeople([])}>clear item</button>
    </div>
  );
}

export default App;
