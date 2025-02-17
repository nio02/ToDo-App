import { CheckIcon } from '../TodoIcon/CheckIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props){
  return(
    <li className='listItem'>
      <span 
        className={`checkItem--${props.completed && "completed"}`}
        onClick={props.onComplete}  
      >
        <CheckIcon/>
      </span>
      <p className={`listText--${props.completed && "completed"}`}>{props.text}</p>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };