import React from "react";
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

function TodoIcon({ type, onClick }){
    if (type === "delete"){
        return (
            <span 
                className = {`${type}Item`}
                onClick = {onClick}
            >
                <DeleteSVG className="iconSvg"/>
            </span>
        );
    } else {
        return (
            <CheckSVG className="iconSvg"/>
        );
    }
}

export { TodoIcon };
