import { useState, useReducer } from "react";
import InputHeader from "./components/InputHeader";
import Items from "./components/Items";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((d) => d.name !== action.name);

    case "TOGGLE":
      return state.map((o) => {
        if (o.name === action.name) {
          return {
            ...o,
            a: !o.a,
          };
        }
        return o;
      });

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  function addItemHandler(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        name: e.target[0].value,
        amount: e.target[1].value,
        a: false,
      },
    });
    e.target[0].value = "";
    e.target[1].value = "";
  }

  function deleteItemHandler(name) {
    dispatch({
      type: "REMOVE",
      name: name,
    });
  }

  function toggleItemHandler(name) {
    console.log("hello");
    dispatch({
      type: "TOGGLE",
      name: name,
    });
  }

  return (
    <>
      <InputHeader addItemHandler={addItemHandler} />
      <Items
        itemList={state}
        deleteItemHandler={deleteItemHandler}
        toggleItemHandler={toggleItemHandler}
      />
    </>
  );
}

export default App;
