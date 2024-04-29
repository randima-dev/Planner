import React from "react";
import { Box, Grid } from "@mui/material";
import RecipeReviewCard from "../components/recipeReviewCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Saloons() {
  const itemArray = [
    {
      "title": "Urban Chic Salon",
      "createdDate": "April 10, 2022",
      "isLiked": true,
      "text": "Experience the latest in hair trends and styling in our Urban Chic Salon. Perfect for those looking to revamp their look in a modern setting.",
      "imageUrl": "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Classic Barbershop",
      "createdDate": "May 15, 2021",
      "isLiked": false,
      "text": "Step back in time with our Classic Barbershop, offering traditional grooming services in an authentically vintage atmosphere.",
      "imageUrl": "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Luxury Spa and Salon",
      "createdDate": "March 03, 2022",
      "isLiked": true,
      "text": "Indulge in luxury at our spa and salon. We offer a serene retreat with spa treatments and beauty services to pamper you from head to toe.",
      "imageUrl": "https://images.unsplash.com/photo-1596542481405-ef47d067e8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Eco-Friendly Beauty Lounge",
      "createdDate": "June 25, 2020",
      "isLiked": true,
      "text": "Our Eco-Friendly Beauty Lounge uses organic and sustainable products in all treatments, perfect for the environmentally conscious consumer.",
      "imageUrl": "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Trendy Hair Studio",
      "createdDate": "July 18, 2021",
      "isLiked": false,
      "text": "Join the latest fashion trends at our Trendy Hair Studio. We specialize in creative haircuts, vibrant colors, and unique styling for all.",
      "imageUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Men’s Grooming Club",
      "createdDate": "August 30, 2021",
      "isLiked": true,
      "text": "Our Men’s Grooming Club offers a sophisticated environment where men can relax and receive hair and beard services tailored to their style.",
      "imageUrl": "https://images.unsplash.com/photo-1583912267679-f9e6f0b71918?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      "title": "Holistic Wellness Salon",
      "createdDate": "September 12, 2022",
      "isLiked": true,
      "text": "Focus on holistic wellness in our salon that integrates beauty treatments with wellness practices to enhance both your physical and mental health.",
      "imageUrl": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ]
  
  return (
    <Box sx={{ flexGrow: 1 }} padding={8}>
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
            />
          );
        })}
      </Grid>
    </Box>
  );
}

export default Saloons;
