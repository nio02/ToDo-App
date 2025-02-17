import React from 'react';
import { ReactComponent as EmptyIcon } from './EmptyIcon.svg';
import './EmptyTodos.css';

function EmptyTodos(){
    return (
        <div className='emptyContainer'>
            <EmptyIcon className='emptyIcon'/>
            <p className='emptyText'>¡Escribe tu primer To Do!</p>
        </div>
    );
}

export { EmptyTodos };