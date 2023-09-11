import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/imageUrl";

interface props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(gen.image_background)}
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                variant="link"
                fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onGenreSelect(gen)}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
