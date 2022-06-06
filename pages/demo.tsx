import React, { useEffect, useMemo, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ImageCheckBoxComponent from "../src/components/library/Form/ImageCheckBox/ImageCheckBox";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        rows: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        autoPlay: true,
      },
    },
  ],
};

const DemoPage = () => {
  const [number, setNumber] = useState(0);
  // Using useMemo
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
  });

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
};

function squareNum(number) {
  return Math.pow(number, 2);
}

export default DemoPage;
