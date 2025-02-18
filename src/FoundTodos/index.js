import React from 'react';
import { ReactComponent as FoundIcon } from './FoundIcon.svg';
import './FoundTodos.css';

function FoundTodos(){
    return (
        <div className='FoundContainer'>
            <FoundIcon className='FoundIcon'/>
            <p className='FoundText'>Lo sentimos, no encontramos ToDo's con esta descripción.</p>
        </div>
    );
}

export { FoundTodos };