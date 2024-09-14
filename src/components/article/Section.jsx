import { Flex } from "@chakra-ui/layout";
import { Heading, Tag } from "@chakra-ui/react";

export default function Section({
  codeSnippet,
  children,
  heading,
  snippetCaption,
  ...rest
}) {
  const id = crypto.randomUUID();

  return (
    <Flex
      gap={4}
      as={"section"}
      flexDir="column"
      {...rest}
      aria-labelledby={id}
    >
      <Heading size={"md"} id={id}>
        {heading}
      </Heading>
      <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: 6, xl: 12 }}>
        <Flex flexDir={"column"} gap={4}>
          {children}
        </Flex>
        {codeSnippet && (
          <Flex
            width={{ lg: "md", xl: "lg" }}
            flexDir={"column"}
            minW={{ lg: "md", xl: "lg" }}
          >
            <Tag borderBottomLeftRadius={0} borderBottomRightRadius={0}>
              {snippetCaption}
            </Tag>
            {codeSnippet}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
