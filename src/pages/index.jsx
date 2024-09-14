import { Container, Center } from "@chakra-ui/react";
import { Solution, KnightShortestPath } from "../components/article";
import { useEffect, useState } from "react";
import { Loader } from "../components/common";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(setIsLoading, 250, false);
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
        <KnightShortestPath />
        <Solution />
      </Center>
    </Container>
  );
}
