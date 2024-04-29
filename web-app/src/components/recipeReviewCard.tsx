import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Button } from "@mui/material";

interface Props {
  title: string;
  createdDate: string;
  text: string;
  imageUrl?: string;
  isLiked?: boolean;
}

export default function RecipeReviewCard({
  title,
  createdDate,
  text,
  isLiked,
  imageUrl,
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        title={title}
        subheader={createdDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: isLiked ? "red" : "grey" }} />
        </IconButton>

        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
