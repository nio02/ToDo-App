import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
  //Estados
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  //Estado del Modal
  const [openModal, setOpenModal] = React.useState(false);
  //Estados derivados
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  console.log('los usuarios buscan todos de ' + searchValue);
  //Función para filtrar en la barra de búsqueda
  const searchedTodos = todos.filter(
    (todo) => {
      //Función normalizar texto
      const sinTildes = (text) =>{
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      }
      //Lógica
      const todoText = sinTildes(todo.text.toLocaleLowerCase());
      const searchText = sinTildes(searchValue.toLocaleLowerCase());
      return todoText.includes(searchText);
    }
  );

  //Función para completar ToDo's
  const checkTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed ? 
    newTodos[todoIndex].completed = false :
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
  };
  //Función para eliminar ToDo's
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            checkTodos,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };