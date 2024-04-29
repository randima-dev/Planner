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

function Hotels() {
  const itemArray = [
    {
      "title": "Elegant Diamond Necklace",
      "createdDate": "April 10, 2022",
      "isLiked": true,
      "text": "This stunning diamond necklace features a delicate gold chain with a beautifully cut diamond pendant, perfect for adding a touch of elegance to any outfit.",
      "imageUrl": "https://images.unsplash.com/photo-1601944179064-0c91e543a478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMG5lY2tsYWNlfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000"
    },
    {
      "title": "Luxury Gold Watch",
      "createdDate": "March 15, 2023",
      "isLiked": false,
      "text": "Crafted with precision, this luxury gold watch combines functionality with style, featuring a sleek design and gold-plated finish that stands out.",
      "imageUrl": "https://images.unsplash.com/photo-1583302910606-bf7c0fe0e6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZCUyMHdhdGNofGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1000"
    },
    {
      "title": "Silver Charm Bracelet",
      "createdDate": "January 20, 2021",
      "isLiked": true,
      "text": "This elegant silver charm bracelet is versatile and stylish, adorned with multiple charms that add a playful touch to this finely crafted piece.",
      "imageUrl": "https://images.unsplash.com/photo-1520517601544-10ed980ae789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lsdmVyJTIwYnJhY2VsZXR8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1000"
    },
    {
      "title": "Pearl Earrings",
      "createdDate": "December 05, 2022",
      "isLiked": false,
      "text": "Simple yet sophisticated, these pearl earrings are a classic addition to any jewelry collection, featuring genuine pearls set in a fine silver backing.",
      "imageUrl": "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcmwlMjBlYXJyaW5nc3xlbnwwfHx8fHw=&ixlib=rb-1.2.1&q=80&w=1000"
    },
    {
      "title": "Ruby Cocktail Ring",
      "createdDate": "November 11, 2021",
      "isLiked": true,
      "text": "Make a bold statement with this stunning ruby cocktail ring, featuring a large, vivid ruby encased in a halo of sparkling diamonds on a gold band.",
      "imageUrl": "https://images.unsplash.com/photo-1618842329436-e25d96e4a036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVieSUyMHJpbmd8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1000"
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

export default Hotels;
