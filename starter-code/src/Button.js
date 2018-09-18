import React from "react";

function CoolButton(props) {
  const { isSmall, isDanger, isSuccess } = props;
  //what is rendered in the DOM
  return (
    <div>
      <button class="button is-rounded my-class is-danger is-small">
        Button 1
      </button>
      <button class="button is-small is-success">Button 2</button>
    </div>
  );
}

export default CoolButton;
