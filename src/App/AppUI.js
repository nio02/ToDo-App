import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { FoundTodos } from '../FoundTodos';

function AppUI(){
    const {
      loading,
      error,
      searchedTodos,
      checkTodos,
      deleteTodo,
      openModal,
      todos
    } = React.useContext(TodoContext);

    return (
        <>  
          <TodoCounter 
            // completed={completedTodos} 
            // total={totalTodos} 
            // loading={loading} 
            // error={error}
          />
          <TodoSearch 
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
          />
      
          <TodoList>
            {loading && <><TodosLoading/> <TodosLoading/> <TodosLoading/></>}
            {(error && !loading) && <TodosError/>}

            {(!loading && todos.length === 0 && !error) && <EmptyTodos/>}

            {(!loading && todos.length !== 0 &&searchedTodos.length === 0 && !error) && <FoundTodos/>}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => checkTodos(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>          
    
          <CreateTodoButton/>

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </>
      );
}

export { AppUI };