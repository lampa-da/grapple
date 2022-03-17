import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import dateFormat from "dateformat";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ThemeProvider,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import theme from "../../theme";
import { createConnection } from "../../store/connections";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          // Provide some spacing between cards
          margin: 1.5,
          width: 1,
        }}
      >
        <Link to={`/people/${user.username}`}>
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 3 }}
            columns={{ xs: 10, sm: 12, lg: 12 }}
          >
            <Grid
              item
              xs={4}
              sm={2}
              lg={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CardMedia component="img" image={user.image} alt="user photo" />
            </Grid>

            <Grid item xs={6} sm={7} lg={8}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.username}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  height="auto"
                >
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  height="auto"
                >
                  Member since {dateFormat(user.createdAt, "mediumDate")}
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={12} sm={3} lg={2} container>
              <CardActions sx={{ width: 1 }}>
                <Button
                  size="small"
                  sx={{ width: 1 }}
                  onClick={() => dispatch(createConnection(auth.id, user.id))}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={2} md={4}>
                      <PersonAddIcon />
                    </Grid>
                    <Grid item xs={6} md={8}>
                      <Typography>Add Friend</Typography>
                    </Grid>
                  </Grid>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Link>
      </Card>
    </ThemeProvider>
  );
};
export default UserCard;
