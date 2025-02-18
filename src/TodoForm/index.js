import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    //Contexto
    const {
        addTodo,
        setOpenModal,
        todos,
    } = React.useContext(TodoContext);
    //Estado
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        //Lógica ToDo existente
        const existingTodos = Object.values(todos).map(todo => todo.text);
        //--normalizando espacios
        const normalTodos = existingTodos.map(str => str.replace(/\s+/g, " ").trim());
        const normalValue = newTodoValue.replace(/\s+/g, " ").trim();
        if(normalTodos.includes(normalValue)){
            alert("¡Ya existe un ToDo con ese nombre! Por favor elige otro.")
        } else if(!newTodoValue || !normalValue){
            alert("Escribe una descripción para tu ToDo.")
        }
        else {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <p>(Máximo 50 caracteres)</p>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
                maxLength={50}
            />
            <div className="button-container">
                <button 
                    type="button"
                    className="button-form button-cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="button-form button-add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };