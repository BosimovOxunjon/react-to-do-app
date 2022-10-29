import Task from "./Task";

const Tasks = ({ tasks, onDelete, onAdd, onPin, background }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onAdd={onAdd}
          onPin={() => onPin(task.id)}
          background={background}
        />
      ))}
    </div>
  );
};

export default Tasks;
