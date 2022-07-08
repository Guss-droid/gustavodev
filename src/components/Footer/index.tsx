import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      fontSize="14"
      mt="auto"
      mb={2}
      color="gray.500"
      gap={1}
      mx="auto"
    >
      <Text>Feito com ❤ por</Text>
      <Text fontWeight="600">Gustavo Ré - 2022</Text>
    </Flex>
  )
}