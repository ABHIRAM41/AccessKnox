import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/Dashboard";
import Dashboardh from "./Demo";
const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
      <Dashboardh/>
    </Provider>
  );
};

export default App;
