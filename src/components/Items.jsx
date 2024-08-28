import React from "react";
import Item from "./Item";

export default function Items({
  itemList,
  deleteItemHandler,
  toggleItemHandler,
}) {
  return (
    <main className="flex">
      {itemList.map((o) => (
        <Item
          a={o.a}
          name={o.name}
          key={o.name}
          amount={o.amount}
          deleteItemHandler={deleteItemHandler}
          toggleItemHandler={toggleItemHandler}
        />
      ))}
    </main>
  );
}
