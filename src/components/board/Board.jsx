import { Grid, GridItem } from "@chakra-ui/react";
import BoardButton from "./BoardButton";
import BoardLabel from "./BoardLabel";
import useBoard from "../../lib/useBoard";

export default function Board() {
  const {
    knightPosition,
    setKnightPosition,
    targetPosition,
    setTargetPosition,
    path,
    setPath,
  } = useBoard();

  function isTarget(row, col) {
    return (
      targetPosition && row === targetPosition[0] && col === targetPosition[1]
    );
  }

  function isKnight(row, col) {
    return (
      knightPosition && row === knightPosition[0] && col === knightPosition[1]
    );
  }

  function handleLeftClick(row, col) {
    if (path) setPath(null);
    if (isTarget(row, col)) setTargetPosition(null);
    if (isKnight(row, col)) return setKnightPosition(null);
    setKnightPosition([row, col]);
  }

  function handleRightClick(row, col) {
    if (path) setPath(null);
    if (isKnight(row, col)) setKnightPosition(null);
    if (isTarget(row, col)) return setTargetPosition(null);
    setTargetPosition([row, col]);
  }

  return (
    <Grid
      templateColumns={"1fr 16fr"}
      templateRows={"16fr 1fr"}
      height={{ base: "xs", sm: "md", md: "lg" }}
      width={{ base: "xs", sm: "md", md: "lg" }}
      as={"section"}
      aria-label="Board"
    >
      <GridItem w={{ base: 8, md: 10 }}>
        <BoardLabel variant={"rows"} />
      </GridItem>
      <GridItem>
        <Grid
          gridTemplateColumns={"repeat(8, 1fr)"}
          gridTemplateRows={"repeat(8, 1fr)"}
          height={"100%"}
          w={"100%"}
          borderWidth={3}
          borderColor={"orange.600"}
        >
          {Array.from(new Array(64), (_, index) => {
            const row = index % 8;
            const col = 7 - Math.floor(index / 8);

            return (
              <GridItem key={index}>
                <BoardButton
                  row={row}
                  col={col}
                  isKnight={isKnight(row, col)}
                  isTarget={isTarget(row, col)}
                  onClick={() => handleLeftClick(row, col)}
                  isInPath={path?.some(([x, y]) => x === row && y === col)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handleRightClick(row, col);
                  }}
                />
              </GridItem>
            );
          })}
        </Grid>
      </GridItem>
      <GridItem></GridItem>
      <GridItem h={{ base: 8, md: 10 }} maxH={{ base: 8, md: 10 }}>
        <BoardLabel variant={"cols"} />
      </GridItem>
    </Grid>
  );
}
