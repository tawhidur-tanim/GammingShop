import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text>{colorMode == "dark" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
