import { useBoard } from "../../hooks";
import { Button, Flex, Tag } from "@chakra-ui/react";

export default function BoardInterface() {
  const { knightPosition, targetPosition, moves, clearBoard, displaySolution } =
    useBoard();

  return (
    <Flex
      gap={3}
      flexWrap={"wrap"}
      justifyContent={{ base: "center", xl: "start" }}
    >
      <Button
        maxW={"fit-content"}
        isDisabled={!knightPosition || !targetPosition}
        onClick={() => displaySolution()}
      >
        Calculate
      </Button>
      <Button
        variant={"outline"}
        colorScheme="red"
        onClick={() => clearBoard()}
      >
        Clear board
      </Button>
      {moves && <Tag px={4} size={"lg"}>{`Result: ${moves}`}</Tag>}
    </Flex>
  );
}
