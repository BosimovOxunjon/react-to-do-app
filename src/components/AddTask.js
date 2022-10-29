import { useState } from "react";
import { VscListSelection } from "react-icons/vsc";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please, write something");
      return;
    }

    onAdd({ text });
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <input
          className="add-task-input"
          name="text"
          type="text"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <VscListSelection className="add-task-btn" />
      </div>
    </form>
  );
};

export default AddTask;
