import { Text, Flex, Heading } from "@chakra-ui/react";
import BoardInterface from "../board/BoardInterface";

export default function KnightShortestPath() {
  return (
    <Flex
      flexDir={"column"}
      alignItems={{ base: "center", xl: "start" }}
      textAlign={{ base: "center", xl: "left" }}
      as={"section"}
      aria-label="Knight's Shortest Path"
    >
      <Heading mb={3} as={"h1"}>
        {"Knight's Shortest Path"}
      </Heading>
      <Text mb={4}>
        This is an intriguing coding challenge I came across where, given start
        and end positions on a chessboard, one must find the shortest possible
        number of moves a knight could take to traverse between them.
      </Text>
      <Text mb={6}>
        Well, here is the manifesation of my solution. Left click on the board
        to select the starting position and right click to select an ending
        position. Press calculate to find the shortest number of knight moves.
      </Text>
      <BoardInterface />
      <Text mt={6}>
        Scroll down to see a walkthrough of my solution written in JavaScript.
      </Text>
    </Flex>
  );
}
