import React, { useState } from "react";

import Listitem from "./listitem";

function App() {
  const [input, updatedInput] = useState("");
  const [list, updatedList] = useState([]);

  const changeHandler = (event) => {
    updatedInput(event.target.value);
    // console.log(event.target.value);
  };

  const addList = () => {
    list.push({ description: input, isComplete: false });
    updatedList(list);
    updatedInput("");
  };

  const deleteItem = (index) => {
    const newList = list.filter((item, i) => i !== index);
    updatedList(newList);
  };

  const markDone = (index) => {
    const anotherList = [...list];
    anotherList[index].isComplete = !anotherList[index].isComplete;
    updatedList(anotherList);
  };

  return (
    <div className="app-background">
      <p className="todolist">To-Do List</p>
      <div className="container">
        <div className="mini-container">
          <input className="txt-input" value={input} onChange={changeHandler} />
          <button className="add" onClick={addList}>
            ADD
          </button>
        </div>

        {list?.length ? (
          list.map((element, index) => (
            <Listitem
              value={element}
              index={index}
              deleteitem={deleteItem}
              markDone={markDone}
            />
          ))
        ) : (
          <p className="no-items">No Items</p>
        )}
      </div>
    </div>
  );
}

export default App;
