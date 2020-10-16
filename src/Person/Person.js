import React, { Component } from 'react';

import './Person.css';

const person = (props) => {

    return (
        <div 
        className="Person"
        style = {style}>
            <p onClick={props.click}>I'm a { props.name } and I am { props.age } years</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    ) 
}

export default Radium(person);
