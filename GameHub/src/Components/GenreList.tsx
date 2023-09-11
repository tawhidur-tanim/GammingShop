import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
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
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(gen.image_background)}
              borderRadius={8}
            ></Image>
            <Button
              variant="link"
              fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onGenreSelect(gen)}
              fontSize="lg"
              whiteSpace="break-spaces"
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
