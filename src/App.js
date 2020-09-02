import React from "react";
import { Component } from "react";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div>
            <h1>Layout components</h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
