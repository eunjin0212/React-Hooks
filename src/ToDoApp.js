import React, { useReducer } from "react";

const reducer = (state, action) => {
  //state : 현재
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
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
  // dispatch : reducer에 action을 보내줌
  return (
    <>
      <h1>{state.count}</h1>
    </>
  );
}

export default App;
