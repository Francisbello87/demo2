import React from "react";
import { Sliders } from "./SVG";

const Slider = ({ min, max, value, step }) => {
  const [valueState, setValue] = React.useState(value);

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" bg-white max-w-[] sliders">


      <Sliders />
    </div>
  );
};

export default Slider;
