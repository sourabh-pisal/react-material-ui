import { AccessTime } from "@mui/icons-material";
import {
  Box,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body1" },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: "body2" },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export type TourCardProps = {
  readonly name: string;
  readonly duration: number;
  readonly rating: number;
  readonly numberOfReviews: number;
  readonly price: number;
  readonly image: string;
};

const TourCard = ({
  name,
  duration,
  rating,
  numberOfReviews,
  price,
  image: imageSrc,
}: TourCardProps): JSX.Element => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={imageSrc} alt="tour" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component={"h2"}>
              {name}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body1" component="p" marginLeft={0.5}>
                {duration}
              </Typography>
            </Box>
            <Box marginTop={3} display={"flex"} alignItems={"center"}>
              <Rating readOnly value={3.5} precision={0.5} size="small" />
              <Typography variant="body2" component={"p"} marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body2" component={"p"} marginLeft={1.5}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component={"h3"}>
                From ${price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
