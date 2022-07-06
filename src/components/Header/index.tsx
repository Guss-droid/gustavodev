import { Box, Flex, Icon, IconButton, Link, Text, useColorMode } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink"

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
        <ActiveLink href="#aboutMe">
          <Text cursor="pointer">
            Sobre mim
          </Text>
        </ActiveLink>

        <ActiveLink href="#myTechnologies">
          <Text cursor="pointer">
            Minhas tecnologias
          </Text>
        </ActiveLink>

        <ActiveLink href="#myRepos">
          <Text cursor="pointer">
            Meus projetos
          </Text>
        </ActiveLink>

        <ActiveLink href="#socialMedia">
          <Text cursor="pointer">
            Redes sociais
          </Text>
        </ActiveLink>
      </Box>
    </Flex>
  )
}