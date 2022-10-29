import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCommentEdit } from "react-icons/bi";
import { SiPinboard } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";

const Task = ({ task, onDelete, onPin, onMemory }) => {
  const [reminder, setReminder] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <form className="task-form">
      <div className="task-form-item">
        <h5 className="task-title">
          <input
            name="checkbox"
            type="checkbox"
            id={task.id}
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          />
          <label className="task-form-label" for={task.id}>
            {task.text}
          </label>
        </h5>
        <i className="btn task-btn-dots" onClick={() => setShow(!show)}>
          <BsThreeDots />
        </i>
      </div>
      <div
        className="task-form-btns"
        style={{ display: show ? "grid" : "none" }}
      >
        <i className="btn task-btn-arrow">
          <IoMdArrowDropup className="task-form-icon" />
        </i>
        <i className="btn btn-pin" onClick={onPin}>
          <SiPinboard className="task-form-icon" />
          Pin on the top
        </i>
        <i className="btn btn-edit">
          <BiCommentEdit className="task-form-icon" /> Add a memo
        </i>
        <i className="btn btn-delete" onClick={() => onDelete(task.id)}>
          <RiDeleteBinLine className="task-form-icon" />
          Delete
        </i>
      </div>
    </form>
  );
};

export default Task;
