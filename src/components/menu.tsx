import React, { useState, useEffect } from "react";
import { Grid, Box, Chip, Typography, Stack } from "@mui/material";

import { dataList } from "../constants/index";
import { useGlobalContext } from "../context/context";

function Menu() {
  const [data, setData] = useState(dataList);
  const { category, cuisines, range, rating, searchTerm } = useGlobalContext();

  useEffect(() => {
    //grab global state
    let newData = dataList;

    // make variable apply filters to itself if they exist
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "gi");
      newData = newData.filter((item) => item.title.match(regex));
    }

    if (category) {
      newData = newData.filter((item) => item.category === category);
    }

    const filteredCuisines = cuisines.filter((cuisine) => cuisine.checked);

    if (filteredCuisines.length) {
      const options = filteredCuisines.map((cuisine) =>
        cuisine.label.toLowerCase()
      );
      newData = newData.filter((item) => options.includes(item.cuisine));
    }

    if (range) {
      newData = newData.filter(
        (item) => item.price > range[0] && item.price < range[1]
      );
    }

    if (rating) {
      newData = newData.filter((item) => item.rating === +rating);
    }

    //set it to local state
    setData(newData);
  }, [searchTerm, category, rating, range, cuisines]);
  return (
    <Box sx={{ flex: "0.8", mt: 2 }}>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid key={item.id} item md={4}>
            <Box
              sx={{
                "& img": {
                  height: "15rem",
                  width: "100%",
                  borderRadius: "2rem",
                },
              }}
            >
              <img src={item.coverSrc} alt="" />

              <Stack
                sx={{ justifyContent: "space-between", mb: 1, mt: 1 }}
                direction="row"
              >
                {" "}
                <Typography fontWeight="bold" component="h2" variant="h4">
                  {item.title}
                </Typography>
                <Chip
                  sx={{ backgroundColor: "#96FCFC" }}
                  label={`🌟${item.rating}`}
                />
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing={1}>
                  <Typography fontWeight="bold" variant="h5" component="p">
                    {item.serviceTime}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{ opacity: "0.7" }}
                  >
                    Delivery Fee ${item.deliveryFee}
                  </Typography>
                </Stack>
                <Typography fontWeight="bold" variant="h5" component="p">
                  ${item.price}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Menu;
