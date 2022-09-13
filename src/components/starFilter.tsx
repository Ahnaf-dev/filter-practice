import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { ratingList } from "../constants/index";
import { useGlobalContext } from "../context/context";
function StarFilter() {
  const { rating, setRating } = useGlobalContext();
  function handleChange(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) {
    setRating(value);
  }
  return (
    <ToggleButtonGroup
      onChange={handleChange}
      value={rating}
      sx={{ gap: "20px" }}
      exclusive
    >
      {ratingList.map((rating) => (
        <ToggleButton
          sx={{
            fontSize: "1.6rem",
            border: "1px solid rgba(0, 0, 0, 0.12) !important",
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
            },
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
          value={rating.value}
          key={rating.id}
        >
          {rating.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default StarFilter;
