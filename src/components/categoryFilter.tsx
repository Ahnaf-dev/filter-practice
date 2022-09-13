import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { categoryList } from "../constants/index";
import { useGlobalContext } from "../context/context";
function CategoryFilter() {
  const { category, setCategory } = useGlobalContext();

  function handleChange(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) {
    setCategory(value);
  }
  return (
    <ToggleButtonGroup value={category} onChange={handleChange} exclusive>
      {categoryList.map((category) => (
        <ToggleButton
          sx={{
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "black", color: "white" },
            },
          }}
          key={category.id}
          value={category.value}
        >
          {category.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default CategoryFilter;
