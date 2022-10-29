import React, { useState } from "react";
import { GoPin } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { SiPinboard } from "react-icons/si";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCommentEdit } from "react-icons/bi";

const PinnedTasks = ({ unPin, id, text, onDelete, onMemory }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <GoPin className="task-pin-icon" />
        <h5 className="task-pin-label" key={id}>
          <div>
            <input name="checkbox" id={id} type="checkbox" />
            <label for={id} key={id}>
              {text}
            </label>
          </div>
          <i className="btn task-btn-dots" onClick={() => setShow(!show)}>
            <BsThreeDots />
          </i>
        </h5>
        {/* <p>{memory}</p> */}
      </div>
      <div
        className="task-form-btns task-pinned-btns"
        style={{ display: show ? "grid" : "none" }}
      >
        <i className="btn task-btn-arrow">
          <IoMdArrowDropup className="task-form-icon" />
        </i>
        <i className="btn btn-pin" onClick={() => unPin(id)}>
          <SiPinboard className="task-form-icon" />
          Unpin from the top
        </i>
        <i className="btn btn-edit" onClick={onMemory}>
          <BiCommentEdit className="task-form-icon" /> Add a memo
        </i>
        <i className="btn btn-delete" onClick={() => onDelete(id)}>
          <RiDeleteBinLine className="task-form-icon" />
          Delete
        </i>
      </div>
    </>
  );
};

export default PinnedTasks;
