import Board from "./components/board/Board";
import { Container, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import KnightShortestPath from "./components/article/KnightShortestPath";
import Solution from "./components/article/Solution";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(setIsLoading, 350, false);
  }, []);

  if (isLoading)
    return (
      <Center
        position={"fixed"}
        top={0}
        left={0}
        minW={"100vw"}
        minH={"100vh"}
        bg={"orange.50"}
      >
        <Spinner color="orange.500" size={"xl"} />
      </Center>
    );

  return (
    <Container
      maxW={"container.xl"}
      minHeight={"100vh"}
      display={"flex"}
      flexDir={"column"}
    >
      <Center
        gap={4}
        flex={1}
        flexDir={"column"}
        py={{ base: 20, xl: 32 }}
        minHeight={{ xl: "100vh" }}
      >
        <Flex
          gap={{ base: 2, sm: 4, xl: 16 }}
          mx={{ base: 4, md: 20 }}
          flexDir={{ base: "column", xl: "row" }}
          mb={32}
        >
          <Heading
            textAlign={"center"}
            as={"h1"}
            mb={2}
            display={{ base: "block", xl: "none" }}
          >
            {"Knight's Shortest Path"}
          </Heading>
          <Board />
          <KnightShortestPath />
        </Flex>
        <Solution />
      </Center>
    </Container>
  );
}

export default App;
