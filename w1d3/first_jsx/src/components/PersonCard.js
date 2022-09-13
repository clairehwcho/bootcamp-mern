// FUNCTIONAL COMPONENTS
import React from "react";
import { useState } from "react";
import style from './PersonCard.module.css';

// FUNCTIONAL COMPONENTS
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props.profile;
    const [ageCount, incrementAge] = useState(age);

    return (
        <div className={style.card}>
            <div className={style.content}>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {ageCount}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={(e) => {
                    incrementAge(ageCount + 1)
                }}>Birthday Button for {firstName} {lastName}</button>
            </div>
        </div>
    );
}

export default PersonCard;


// CLASS COMPONENTS
// import React, { Component } from 'react';
// import style from './PersonCard.module.css';


// class PersonCard extends Component {

//     // Declare constructor to override our default contructor so that we can initially set the state object
//     constructor(props){
//         // Super gives us all the functionality of the default constructor that comes with component
//         super(props);
//         this.state = {
//             age: this.props.age
//         }

//     }

//     incrementAge = (e) => {
//         this.setState({age: this.state.age + 1});
//     }

//     render () {
//         return (
//             <div className={style.card}>
//                 <div className={style.content}>
//                     <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                     <p>Age: {this.state.age}</p>
//                     <p>Hair color: {this.props.hairColor}</p>
//                     <button onClick = {this.incrementAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//                 </div>
//             </div>
//         );
//     }
// }
// export default PersonCard;
