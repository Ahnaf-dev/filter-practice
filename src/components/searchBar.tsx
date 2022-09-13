import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from "../context/context";

function Searchbar() {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  }
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      <SearchIcon
        sx={{
          fontSize: "30px",
          position: "absolute",
          top: "25%",
          opacity: "0.6",
        }}
      />
      <TextField
        sx={{ width: "100%", "& input": { fontSize: "1.8rem", pl: "5rem" } }}
        type="search"
        id="search"
        placeholder="Search Menu"
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
}

export default Searchbar;
