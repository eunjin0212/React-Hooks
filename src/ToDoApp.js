import React, { useReducer } from "react";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const reducer = (state, action) => {
  //state : 현재
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
  //return 하는 object는 state를 "대체" 함, 변경 X
};
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // `const reducer = (state = { count: 0 }, action) => {}`
  // = `reducer, { conut: 0 }` conut 부분이 state
  // dispatch : action을 가지고 reducer function 다시 실행함
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Add</button>
    </>
  );
}

export default App;
