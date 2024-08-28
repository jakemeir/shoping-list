import React from "react";

export default function Item({
  a,
  amount,
  name,
  deleteItemHandler,
  updateHandler,
  toggleItemHandler,
}) {
  return (
    <div>
      {a && <p>complete</p>}
      <p>
        {name} {amount}
      </p>
      <button onClick={updateHandler}>⚙</button>
      <button onClick={() => deleteItemHandler(name)}>X</button>
      <input type="checkbox" onClick={() => toggleItemHandler(name)} />
      <button>#</button>
    </div>
  );
}
