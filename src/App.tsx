import React from "react";
import { Stack } from "@mui/material";
import { FilterContextProvider } from "./context/context";
import FilterBar from "./components/filterBar";
import Menu from "./components/menu";
import Searchbar from "./components/searchBar";

function App() {
  return (
    <FilterContextProvider>
      <div className="App">
        <Searchbar />
        <Stack direction="row">
          <FilterBar />
          <Menu />
        </Stack>
      </div>
    </FilterContextProvider>
  );
}

export default App;
