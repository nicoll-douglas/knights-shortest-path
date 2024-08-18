import { Flex } from "@chakra-ui/layout";

export default function Section({ codeSnippet, children, ...rest }) {
  return (
    <Flex
      gap={{ base: 4, xl: 16 }}
      as={"section"}
      flexDir={{ base: "column", xl: "row" }}
      {...rest}
    >
      <Flex
        width={{ base: "xs", sm: "md", md: "lg" }}
        alignItems={"start"}
        justifyContent={"end"}
      >
        {codeSnippet}
      </Flex>
      <Flex
        width={{ base: "xs", sm: "md", md: "lg" }}
        flexDir={"column"}
        gap={4}
      >
        {children}
      </Flex>
    </Flex>
  );
}
