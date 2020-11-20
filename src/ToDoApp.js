import React, { useReducer, useState } from "react";

const initialState = {
  toDos: [],
};
const ADD = "increment";

const reducer = (state, action) => {
  switch (action) {
    case ADD:
      return { count: state.count + 1 };

    default:
      throw new Error("This is Error");
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDeafult();
    dispatch({ type: ADD, payload: newToDo });
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add To Do</h1>
      <form>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default App;
