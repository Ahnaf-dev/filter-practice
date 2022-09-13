import React from "react";
import { Slider } from "@mui/material";
import { useGlobalContext } from "../context/context";

function SliderFilter() {
  const { range, setRange } = useGlobalContext();

  function handleChange(event: Event, value: number[] | number) {
    setRange(value as number[]);
  }
  return (
    <Slider
      sx={{
        width: "90%",
        color: "black",
        "& .MuiSlider-valueLabelOpen": {
          backgroundColor: "black",
          fontSize: "1.8rem",
          borderRadius: "50px",
          padding: "5px",
        },
      }}
      onChange={handleChange}
      value={range}
      max={5000}
      valueLabelDisplay="auto"
    />
  );
}

export default SliderFilter;
