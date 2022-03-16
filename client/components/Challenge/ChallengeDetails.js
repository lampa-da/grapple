import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export const ChallengeDetails = () => {
  const state = useSelector((state) => state);



  const thisChallengeId = useParams().id;
  const challenge = state.challenges[thisChallengeId]

  if (!challenge) {
    return "Sorry the challenge you are looking for is unreachable";
  }
 
  console.log(challenge);

  return (
    <Card
    sx={{
      maxWidth: 345,
      // Provide some spacing between cards
      margin: 1.5,
      // Use flex layout with column direction for components in the card
      // (CardContent and CardActions)
      display: "flex",
      flexDirection: "column",
      // Justify the content so that CardContent will always be at the top of the card,
      // and CardActions will be at the bottom
      justifyContent: "space-between",
    }}
  >
    <CardMedia
      component="img"
      height="200"
      image={challenge.image}
      alt="challenge cover photo"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {challenge.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" height="auto">
        {challenge.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Join Challenge</Button>
    </CardActions>
  </Card>
  );
};
export default ChallengeDetails;
