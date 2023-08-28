import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="green">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="yellow">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
