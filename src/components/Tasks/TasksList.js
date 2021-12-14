import React, {useState} from "react";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";

import classes from "./TasksList.module.css";

const TasksList = props => {
    console.log(props.tasks);
    if(props.tasks.length > 0) {
        return (<Card>
            <ul className={classes.list}>
                {props.tasks.map( (task) => {
                    console.log(task);
                    return (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            done={task.done}
                        ></TaskItem>)
                })}
            </ul>
        </Card>)
    } else {
        return <h3>No tasks found.</h3>
    }
};

export default TasksList;
