import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSckeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={2} padding={5}>
        {isLoading &&
          skeletons.map(() => (
            <GameCardContainer>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
