import { Grid, GridItem } from "@chakra-ui/react";
import BoardButton from "./BoardButton";
import BoardLabel from "./BoardLabel";
import useBoard from "../../lib/useBoard";

export default function Board() {
  const { path, placeKnight, placeTarget, isKnight, isTarget } = useBoard();

  return (
    <Grid
      templateColumns={"1fr 16fr"}
      templateRows={"16fr 1fr"}
      height={{ base: "xs", sm: "md", md: "lg" }}
      minWidth={{ base: "xs", sm: "md", md: "lg" }}
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
                  onClick={() => placeKnight(row, col)}
                  isInPath={path?.some(([x, y]) => x === row && y === col)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    placeTarget(row, col);
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
