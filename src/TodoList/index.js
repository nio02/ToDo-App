import './TodoList.css';

function TodoList({children}){
    return(
      <ul className='listContainer'>
        {children}
      </ul>
    );
}

export { TodoList };