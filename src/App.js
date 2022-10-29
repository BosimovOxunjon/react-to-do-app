import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import PinnedTasks from "./components/PinnedTasks";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [pinnedTasks, setPinnedTasks] = useState([]);
  const [memory, setMemory] = useState("");

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const pinnedTask = (id) => {
    const pinId = tasks.find((pin) => pin.id === id);
    setPinnedTasks((state) => [...state, pinId]);
    deleteTask(id);
    console.log({ pinnedTasks });
    console.log({ tasks });
    console.log(id);
  };

  const unPinTask = (id) => {
    const pinId = pinnedTasks.find((pin) => pin.id === id);
    setTasks((state) => [...state, pinId]);
    deletePinnedTask(id);
    // deletePinnedTask(id);
    console.log(id);
    console.log(pinId.text);
    console.log("UnpinTask");
  };

  const deletePinnedTask = (id) => {
    setPinnedTasks((state) => [...state], pinnedTasks);
    setPinnedTasks(pinnedTasks.filter((item) => item.id !== id));
    console.log(pinnedTasks);
    console.log(id);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // const onMemory = (id) => {
  //   const idMemory = tasks.find((item) => item.id === id);
  //   const inputMemory = prompt("You can add a memory", idMemory);
  //   localStorage.setItem(memory, JSON.stringify(inputMemory));
  //   setMemory((state) => [
  //     ...state,
  //     inputMemory,
  //     localStorage.getItem(inputMemory),
  //   ]);
  //   console.log(inputMemory);
  //   console.log(memory);
  // };

  const actived = "active";

  return (
    <>
      <div className="wrapper">
        <Header className={actived} />
        <Timer />
        <div className="form-wrapper">
          <AddTask onAdd={addTask} />
          {pinnedTasks.map((task) => (
            <PinnedTasks
              pinnedTask={task}
              unPin={unPinTask}
              memory={memory}
              id={task.id}
              text={task.text}
              // onMemory={onMemory}
              onDelete={deletePinnedTask}
            />
          ))}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onPin={pinnedTask} />
          ) : (
            "No Tasks To Show"
          )}
        </div>
      </div>
    </>
  );
}

export default App;
