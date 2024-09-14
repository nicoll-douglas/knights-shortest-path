import { Text, Flex, Heading, Box, Link, Button } from "@chakra-ui/react";
import { Board, BoardInterface } from "../board";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function KnightShortestPath() {
  return (
    <Box as="main" aria-labelledby="heading-1">
      <Heading
        mb={4}
        mx={{ base: "auto", xl: 0 }}
        maxW={"fit-content"}
        id="heading-1"
      >
        Knight&apos;s Shortest Path
      </Heading>
      <Flex
        gap={{ base: 6, xl: 12 }}
        flexDir={{ base: "column", xl: "row" }}
        alignItems={{ base: "center", xl: "start" }}
        mb={32}
      >
        <Flex
          flexDir={"column"}
          alignItems={{ base: "center", xl: "start" }}
          textAlign={{ base: "center", xl: "left" }}
        >
          <Text mb={4}>
            This is an intriguing coding challenge I came across where, given
            start and end positions on a chessboard, one must find the shortest
            possible number of moves a knight could take to traverse between
            them.
          </Text>
          <Text mb={6}>
            Well, here is the manifesation of my solution. Left click on the
            board to select the starting position and right click to select an
            ending position. Press calculate to find the shortest number of
            knight moves.
          </Text>
          <BoardInterface />
          <Button
            mt={6}
            href="https://github.com/nicoll-douglas/knights-shortest-path/tree/main/src/lib/knights-shortest-path"
            as={Link}
            variant={"link"}
            target="_blank"
            mb={3}
          >
            Source <ExternalLinkIcon mx={"3px"} />
          </Button>
          <Text>
            Scroll down to see a walkthrough of my solution written in
            JavaScript.
          </Text>
        </Flex>
        <Board />
      </Flex>
    </Box>
  );
}
