import React, {useState} from 'react';
import AddTask from './components/Tasks/AddTaskForm';
import TaskList from './components/Tasks/TasksList';

const DUMMY_TASKS = [
  {
    id: "task1",
    title: "Learn what is the React custom component",
    done: true
  },
  {
    id: "task2",
    title: "Learn what is the React State",
    done: true
  },
  {
    id: "task3",
    title: "Learn how to use reducers",
    done: false
  },
  {
    id: "task4",
    title: "Learn how to optimize React app",
    done: false
  }
];

function App() {
  const [tasksList, setTasksList] = useState(DUMMY_TASKS);

  const onAddTaskHandler = (taskItem) => {
    setTasksList([...tasksList, taskItem]);
  };

  return (
    <div>
      <AddTask onAddTask={onAddTaskHandler} />
      <TaskList tasks={tasksList} />
    </div>
  );
}

export default App;
