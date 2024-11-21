import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const containsSpecialCharacters = (task) => {
    const regex = /[^A-Za-z0-9\s]/;
    return regex.test(task);
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    if (containsSpecialCharacters(newTask)) {
      alert("Special characters are not allowed.");
      return;
    }

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const updateTask = () => {
    if (!newTask.trim()) return;

    if (containsSpecialCharacters(newTask)) {
      alert("Special characters are not allowed.");
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = newTask;
    setTasks(updatedTasks);
    setNewTask("");
    setEditingIndex(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">To-Do List</h1>
      <div>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="btn btn-primary w-30 mb-3"
          onClick={editingIndex !== null ? updateTask : addTask}
        >
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>
        <hr />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                {editingIndex !== index && (
                  <button
                    style={{ marginRight: 5 }}
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                )}
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
