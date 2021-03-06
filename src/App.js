import React from "react";
import translations from "./translations";
import Lang from "./context";
import Screen from "./screen";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
