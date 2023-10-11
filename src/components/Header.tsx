import { Flex } from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Flex w="full" h="10vh" px={5} alignItems="center" justifyContent="end">
        <ColorModeToggle size="lg" />
      </Flex>
    </header>
  );
};