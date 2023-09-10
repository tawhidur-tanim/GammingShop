import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius={5} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
