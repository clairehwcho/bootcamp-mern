import './App.css';
import React from "react";
import PersonCard from './components/PersonCard';


// FUNCTIONAL COMPONENTS
function App () {
  const profiles = [
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
    { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
    { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }
  ]
  return (
    <div className="App">
      {profiles.map((profile, i) => {
        return <PersonCard key={i} profile={profile} />
      })
      }
    </div>
  );
}

// CLASS COMPONENTS
function App () {
  return (
    <div className="App">
      {profiles.map(person => {
        return (
          <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />

        )
      })
      }
    </div>
  );
}

export default App;
