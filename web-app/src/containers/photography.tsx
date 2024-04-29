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

function Jewellery() {
  const itemArray = [
    {
      "title": "Landscape Photography",
      "text": "Capture the breathtaking views of nature. This example features a stunning sunrise over the mountains, ideal for those looking to expand their landscape photography portfolio.",
      "imageUrl": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "createdDate": "April 15, 2021"
    },
    {
      "title": "Urban Street Photography",
      "text": "Explore the vibrant streets of the city. This image showcases urban life through street photography, capturing the dynamic motion and candid moments of city dwellers.",
      "imageUrl": "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "createdDate": "June 10, 2022"
    },
    {
      "title": "Wildlife Photography",
      "text": "Get close to nature's most fascinating creatures. This wildlife photograph captures a rare moment with a majestic lion in its natural habitat, perfect for wildlife enthusiasts.",
      "imageUrl": "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "createdDate": "March 03, 2023"
    },
    {
      "title": "Portrait Photography",
      "text": "Focus on the beauty and uniqueness of individual subjects. This portrait demonstrates professional lighting and framing techniques that highlight the subject's features.",
      "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "createdDate": "January 25, 2020"
    },
    {
      "title": "Night Sky Photography",
      "text": "Capture the magic of the night sky. This image of the Milky Way provides a glimpse into the possibilities of night sky photography, featuring stellar clarity and depth.",
      "imageUrl": "https://images.unsplash.com/photo-1531177071211-e1ff83eac660?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "createdDate": "September 18, 2021"
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

export default Jewellery;
