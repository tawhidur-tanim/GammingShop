import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/imageUrl";

const GenreList = () => {
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
            <Text fontSize="lg">{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
