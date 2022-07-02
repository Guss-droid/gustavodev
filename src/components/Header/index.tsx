import { Box, Flex, Icon, IconButton, Text, useColorMode } from "@chakra-ui/react";

import { FiMoon, FiSun } from "react-icons/fi"

export function Header() {

  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      h={20}
      align="center"
      bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
      pos="fixed"
      zIndex={2}
      w="100%"
      justify="space-between"
      borderBottomWidth={1}
    >
      <IconButton
        aria-label="Switch theme"
        icon={<Icon as={colorMode === "dark" ? FiSun : FiMoon} />}
        ml={8}
        variant="outline"
        fontSize={[22, 22, 20]}
        onClick={() => toggleColorMode()}
        _focus={{ outline: "none" }}
      />

      <Box display="flex" gap={8} mr={8}>
        <Text><a href="#aboutMe">Sobre mim</a></Text>
        <Text><a href="#myTechnologies">Minhas tecnologias</a></Text>
        <Text><a href="#myRepos">Meus projetos</a></Text>
        <Text><a href="#socialMedia">Redes sociais</a></Text>
      </Box>
    </Flex>
  )
}