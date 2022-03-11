import React from "react";

import "./listitem.css";

function Listitem(props) {
  const deleteTask = () => {
    props.deleteitem(props.index);
  };
  const markhandler = () => {
    props.markDone(props.index);
  };

  return (
    <div className="list-item">
      <span
        className={props.value.isComplete ? "task-complete" : ""}
        onClick={markhandler}
      >
        {props.value.description}
      </span>
      <span
        className={props.value.isComplete ? "delete-remove" : "delete"}
        onClick={deleteTask}
      >
        ❌
      </span>
      <span className={props.value.isComplete ? "marked" : "marked-remove"}>
        ✅
      </span>
    </div>
  );
}
export default Listitem;
