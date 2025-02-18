import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

//Diccionario Inicial
// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el curso de REACT', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Lavar Loza', completed: false},
//   {text: 'Limpiar la arena', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
