import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h3>Список</h3>
          <div className="task-input">
            <input
                type="text"
                placeholder="Введите новую задачу"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Добавить</button>
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
          </ul>
        </header>
      </div>
  );
}

export default App;