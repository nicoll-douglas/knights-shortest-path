import { Center, Spinner } from "@chakra-ui/react";

export default function Loader() {
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
}
