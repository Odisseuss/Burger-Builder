import React from "react";
import logo from "./logo.svg";
import Layout from "./components/HOC/Layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
