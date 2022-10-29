import React from "react";
import React, { useState } from "react";

export const Buttons = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="task-form-btns" style={{ display: show ? "grid" : "none" }}>
      <i className="btn task-btn-arrow">
        <IoMdArrowDropup className="task-form-icon" />
      </i>
      <i className="btn btn-pin" onClick={onPin}>
        <SiPinboard className="task-form-icon" />
        Pin on the top
      </i>
      <i className="btn btn-edit" onClick={onMemory}>
        <BiCommentEdit className="task-form-icon" /> Add a memo
      </i>
      <i className="btn btn-delete" onClick={() => onDelete(task.id)}>
        <RiDeleteBinLine className="task-form-icon" />
        Delete
      </i>
    </div>
  );
};
