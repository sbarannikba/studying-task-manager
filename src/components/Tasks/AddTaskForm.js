import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddTaskForm.module.css";

const AddTask = props => {
    const [taskName, setTaskName] = useState('');

    const AddTaskHandler = (event) => {
        event.preventDefault();
        props.onAddTask({
            id: "task" + parseInt(Math.random()*100), //enough uniq id for testing app
            title: taskName,
            done: false
        });
    };

    const taskNameChangerHandler = (event) => {
        setTaskName(event.target.value);
    };

    return (
    <Card className={classes.input}>
        <form onSubmit={AddTaskHandler}>
            <label htmlFor="Task">Add a new task</label>
            <input id="username" type="text" onChange={taskNameChangerHandler} />
            <Button type="submit">Add</Button>
        </form>
    </Card>
    )
};

export default AddTask;
