import React, { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== "") {
      const newTask = {
        id: Math.random(),
        taskName: task,
      };
      setTaskList([...taskList, newTask]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List By Deep Ghinaiya</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {taskList.map((task) => (
          <div key={task.id} className="task">
            <p>{task.taskName}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
