import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useGlobalContext } from "../context/context";
function CuisineFilter() {
  const { cuisines, setCuisines } = useGlobalContext();

  function handleChange(id: number) {
    setCuisines((state) => {
      return state.map((cuisine) => {
        if (cuisine.id === id) {
          return { ...cuisine, checked: !cuisine.checked };
        }
        return cuisine;
      });
    });
  }

  return (
    <FormGroup>
      {cuisines.map((cuisine) => (
        <FormControlLabel
          onChange={() => handleChange(cuisine.id)}
          key={cuisine.id}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "1.8rem",
            },
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            m: 0,
            mb: 1,
          }}
          control={
            <Checkbox
              checked={cuisine.checked}
              sx={{
                "&.Mui-checked": { color: "black !important" },
                "& .MuiSvgIcon-root": { fontSize: 28 },
              }}
            />
          }
          label={cuisine.label}
        />
      ))}
    </FormGroup>
  );
}

export default CuisineFilter;
