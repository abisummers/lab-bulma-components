import React, { Component } from "react";

import FormField from "./FormField.js";
import Nav from "./Nav.js";
import CoolButton from "./Button.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "A",
      Email: "AAA"
    };
  }

  render() {
    return (
      <div>
        <nav>
          <Nav />
        </nav>

        <div>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>

        <div>
          <CoolButton isSmall isDanger className="is-rounded my-class" />
        </div>
      </div>
    );
  }
}

export default App;
