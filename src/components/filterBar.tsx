import React from "react";
import { Box } from "@mui/material";
import { useGlobalContext } from "../context/context";
import CategoryFilter from "./categoryFilter";
import CuisineFilter from "./cuisineFilter";
import StarFilter from "./starFilter";
import SliderFilter from "./sliderFilter";
function FilterBar() {
  return (
    <Box sx={{ flex: 0.2, p: 1 }}>
      <h2>Category</h2>
      <CategoryFilter />
      <h2>Cuisine</h2>
      <CuisineFilter />
      <h2>Price Range</h2>
      <SliderFilter />
      <h2>Star Rating</h2>
      <StarFilter />
    </Box>
  );
}

export default FilterBar;
