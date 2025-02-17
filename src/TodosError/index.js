import React from 'react';
import { ReactComponent as ErrorIcon } from './ErrorIcon.svg';
import './TodosError.css';

function TodosError(){
    return(
        <div className='errorContainer'>
            <ErrorIcon className='errorIcon'/>
            <p className='errorText'>¡Ha ocurrido un error!</p>
            <button className='errorButton'><p>Intentar de nuevo</p></button>
        </div>
    );
}

export { TodosError };