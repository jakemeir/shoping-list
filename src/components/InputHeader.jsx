import React from "react";

export default function InputHeader({ addItemHandler }) {
  return (
    <header className="bg-gray-800 text-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <form className="flex items-center space-x-4" onSubmit={addItemHandler}>
        <div className="flex flex-col">
          <label htmlFor="item" className="mb-1 text-sm font-medium">
            Item
          </label>
          <input
            type="text"
            id="item"
            className="text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-1 text-sm font-medium">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2  px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add
        </button>
      </form>
    </header>
  );
}
