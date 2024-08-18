import useBoard from "../../lib/useBoard";
import shortestNumberOfKnightMoves from "../../lib/shortestNumberOfKnightMoves";
import { Button, Flex, Tag } from "@chakra-ui/react";

export default function BoardInterface() {
  const {
    knightPosition,
    setKnightPosition,
    targetPosition,
    setTargetPosition,
    moves,
    setMoves,
    setPath,
  } = useBoard();

  return (
    <Flex gap={3} flexWrap={"wrap"}>
      <Button
        maxW={"fit-content"}
        isDisabled={!knightPosition || !targetPosition}
        onClick={() => {
          const { moves: result, path: resultingPath } =
            shortestNumberOfKnightMoves(knightPosition, targetPosition);
          setPath(resultingPath);
          setMoves(result);
        }}
      >
        Calculate
      </Button>
      <Button
        variant={"outline"}
        colorScheme="red"
        onClick={() => {
          setTargetPosition(null);
          setKnightPosition(null);
          setPath(null);
          setMoves(null);
        }}
      >
        Clear board
      </Button>
      {moves && <Tag px={4} size={"lg"}>{`Result: ${moves}`}</Tag>}
    </Flex>
  );
}
