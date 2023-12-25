import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import DenseAppBar from "./components/AppBar";
import TourCard from "./components/TourCard";
import cities from "./data.json";

function App(): JSX.Element {
  return (
    <>
      <DenseAppBar />
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography variant="h4" component="h2">
              {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour) => (
                <TourCard {...tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}

export default App;
