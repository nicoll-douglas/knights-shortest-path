import { Flex, Box } from "@chakra-ui/react";

export default function BoardLabel({ variant }) {
  if (variant === "rows")
    return (
      <Flex
        flexDir={"column"}
        px={2}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"full"}
        h={"full"}
      >
        {Array.from(new Array(8), (_, index) => (
          <Box key={index} fontWeight={"bold"}>
            {8 - index}
          </Box>
        ))}
      </Flex>
    );

  if (variant === "cols")
    return (
      <Flex
        py={2}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"full"}
        h={"full"}
      >
        {Array.from(new Array(8), (_, index) => {
          const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
          return (
            <Box key={index} fontWeight={"bold"}>
              {letters[index]}
            </Box>
          );
        })}
      </Flex>
    );
}
