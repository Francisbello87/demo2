import React from "react";
import { Sliders } from "./SVG";

const Slider = ({ min, max, value, step }) => {
  const [valueState, setValue] = React.useState(value);

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" bg-white max-w-[] sliders">

    {/* // <div class="fractional-slider">
    //   <input
    //     type="range"
    //     min={min}
    //     max={max}
    //     step={step}
    //     value={valueState}
    //     onChange={updateValue}
    //   />
    //   <output>
    //     {valueState}
    //   </output>
    // </div */}
    {/* <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span>
    <span>0</span> */}
    <Sliders/>
    </div>
  );
};

export default Slider;
