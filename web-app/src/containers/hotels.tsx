import React, { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import RecipeReviewCard from "../components/recipeReviewCard";
import { Hotel } from "../states/types/hotel";
import { Dispatch, bindActionCreators } from "redux";
import { fetchHotels } from "../states/actions/hotel";
import { connect } from "react-redux";

interface Props {
  hotels: Hotel[];
  fetchHotelsDetails: () => void;
}

function Hotels({ hotels, fetchHotelsDetails }: Props) {
  //const itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [hotelDetails, setHotelDetails] = useState<Hotel[]>([]);

  useEffect(() => {
    fetchHotelsDetails();
  }, []);
  useEffect(() => {
    setHotelDetails(hotels);
  }, [hotels]);
  console.log("🚀 ~ Hotels ~ hotels:", hotels)

  return (
    <Box
      sx={{ flexGrow: 1 }}
      padding={"2px 8px"}
      display={"flex"}
      className="test"
    >
      {/* <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box> */}
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={4}
        >
          {hotelDetails &&
            hotelDetails.map((item) => {
              return (
                <RecipeReviewCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  createdDate={item.createdDate}
                  text={item.text}
                  isLiked={item.isLiked}
                />
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: any) => ({
  hotels: state.hotel.hotels,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      fetchHotelsDetails: fetchHotels,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
