import Board from "./components/board/Board";
import { Container, Center, Flex } from "@chakra-ui/react";
import KnightShortestPath from "./components/article/KnightShortestPath";
import Solution from "./components/article/Solution";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(setIsLoading, 350, false);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container
      maxW={"6xl"}
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
        px={{ base: 0, md: 4, xl: 0 }}
      >
        <Flex
          gap={{ base: 2, sm: 4, xl: 16 }}
          flexDir={{ base: "column", xl: "row" }}
          alignItems={{ base: "center", xl: "start" }}
          mb={32}
        >
          <KnightShortestPath />
          <Board />
        </Flex>
        <Solution />
      </Center>
    </Container>
  );
}

export default App;
