import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <h4>How react works?</h4>
            <p >React creates  a virtual dom.It does not manipulate browser dom directly rather it looks for  changes or differences comparing with virtual dom.Then it only changes the portion it needs to be changed.Everthing others it just manipulates.</p>
            <h4>How useState works?</h4>
            <p>useState is a hook that react gives developers to have state variables in functional components.By this function you can pass the initial state.It returns a variable with the current state value and  another function to update the value.</p>
            
        </div>
    );
};

export default Question;