import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {
      loading,
      error,
      totalTodos,
      completedTodos
    } = React.useContext(TodoContext);

    return(
      loading ? <h1>Cargando...</h1> :
      error ? <h1>Error...</h1> :
      (completedTodos === 0 && totalTodos === 0) ? <h1>No tienes <span>To Do's</span> por el momento...</h1> :
      completedTodos === totalTodos
      ?
      <h1>No tienes tares pendientes. <span>¡¡Felicidades!!</span></h1>
      :
      <h1>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo's
      </h1>
    );
}

export { TodoCounter};
