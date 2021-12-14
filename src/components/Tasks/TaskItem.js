import React, {useState} from 'react';

import classes from './TaskItem.module.css';

function ExpenseItem(props) {
    const [isChecked, setIsChecked] = useState(props.done || false);

    const taskStatusChangedHandler = (event) => {
        setIsChecked(!isChecked);
    };
    
    return (
        <li className={`${classes.task} ${isChecked ? classes.done : ''}`}>
            <input id={`checkbox${props.id}`} type="checkbox" checked={isChecked} onChange={taskStatusChangedHandler} />
            <label htmlFor={`checkbox${props.id}`}>{props.title}</label>
        </li>
    );
}

export default ExpenseItem;
