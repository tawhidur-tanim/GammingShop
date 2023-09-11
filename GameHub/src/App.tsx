import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import "./App.css";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./Components/PlatformList";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onGenreSelect={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformList
            onPlatformSelect={(platform) => setselectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          ></PlatformList>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
