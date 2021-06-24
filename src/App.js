//import './App.css'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(
      "http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks"
    );
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(
      `http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/${id}`
    );
    const data = await res.json();

    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    console.log("Delete!", id);
    await fetch(
      `http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/${id}`,
      { method: "DELETE" }
    );

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Task Reminder
  const toggleReminder = async (id) => {
    console.log("Toggle Reminder!", id);

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(
      `http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      }
    );

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Form submit
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // console.log('Add!', newTask)
    // setTasks([...tasks, newTask])
    const res = await fetch(
      "http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        {/* <Header title='Hello'/> */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                />
              ) : (
                "Please add a task"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
