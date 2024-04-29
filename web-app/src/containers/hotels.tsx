import React, { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import RecipeReviewCard from "../components/recipeReviewCard";

function Hotels() {
  //const itemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const itemArray = [
    {
      title: "Elegant Hotel",
      createdDate: "September 14, 2016",
      isLiked: true,
      text: "Discover the charm of our elegant hotel, perfect for business and leisure travelers alike. Enjoy luxurious amenities and impeccable service during your stay.",
      imageUrl:
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Coastline Resort",
      createdDate: "October 05, 2017",
      isLiked: true,
      text: "Nestled on the coast, our resort offers a serene escape with spectacular views of the ocean. Ideal for a relaxing getaway or a romantic weekend.",
      imageUrl:
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBob3RlbHxlbnwwfHx8fA&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Urban Boutique Hotel",
      createdDate: "November 29, 2018",
      isLiked: false,
      text: "Experience the vibrant city life with a stay at our urban boutique hotel. Located in the heart of the city, steps away from major attractions and shopping areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwaG90ZWx8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Mountain Retreat",
      createdDate: "December 21, 2019",
      isLiked: true,
      text: "Escape to the mountains for a peaceful retreat in our secluded lodge. Enjoy hiking, skiing, and the tranquil beauty of nature in our cozy, welcoming environment.",
      imageUrl:
        "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluJTIwaG90ZWx8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Historic Inn",
      createdDate: "January 15, 2020",
      isLiked: false,
      text: "Stay at our historic inn, where each room tells a story. Built in the 19th century, this inn has been meticulously preserved to offer a unique historical experience.",
      imageUrl:
        "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhpc3RvcmljJTIwaW5ufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Luxury Spa Resort",
      createdDate: "February 20, 2021",
      isLiked: true,
      text: "Indulge in ultimate luxury at our spa resort. Offering world-class spa treatments, gourmet dining, and elegant suites, it’s the perfect place for a pampering retreat.",
      imageUrl:
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
    {
      title: "Family Friendly Hotel",
      createdDate: "March 12, 2022",
      isLiked: false,
      text: "Perfect for families, our hotel features spacious rooms, a children’s play area, and activities for all ages. Enjoy a stress-free vacation with facilities designed for family fun.",
      imageUrl:
        "https://images.unsplash.com/photo-1570213489059-0aac6626cade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwaG90ZWx8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1000",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} padding={'2px 8px'} display={'flex'} className='test'>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={4}
        >
          {itemArray.map((item) => {
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

export default Hotels;
