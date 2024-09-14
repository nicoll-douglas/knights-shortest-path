import { Container, Center } from "@chakra-ui/react";
import { Solution, KnightShortestPath } from "../components/article";

export default function Index() {
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
        <KnightShortestPath />
        <Solution />
      </Center>
    </Container>
  );
}
