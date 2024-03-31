import React from "react";
import Home from "./src/screens/home/Home";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
export default App;