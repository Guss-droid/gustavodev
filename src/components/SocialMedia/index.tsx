import { Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { gradientInsta } from "../Gradient";

export function SocialMedia() {
  return (
    <Flex id="socialMedia" mt={10} w="100%" justify="center" mb={20}>
      <Flex flexDir="column">
        <Text fontWeight="600" fontSize="32">Minhas redes sociais</Text>

        <Stack direction={["column", "column", "row", "row"]} align="center" justify="center" mt={8} spacing={6}>
          <a target="_blank" href="https://github.com/Guss-droid" rel="noreferrer">
            <IconButton
              aria-label="Github"
              icon={<Icon as={AiOutlineGithub} fontSize="28" />}
              w={12}
              h={12}
              bg="gray.900"
              color="gray.0"
              _focus={{ outline: "none" }}
              _hover={{ opacity: 0.6 }}
            />
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/gustavo-re/" rel="noreferrer">
            <IconButton
              aria-label="LinkedIn"
              icon={<Icon as={AiFillLinkedin} fontSize="28" />}
              w={12}
              h={12}
              bg="blue.400"
              color="gray.0"
              _focus={{ outline: "none" }}
              _hover={{ opacity: 0.6 }}
            />
          </a>

          <a target="_blank" href="https://www.instagram.com/guh_re/" rel="noreferrer">
            <IconButton
              aria-label="Instagram"
              icon={<Icon as={AiOutlineInstagram} fontSize="28" />}
              w={12}
              h={12}
              bgGradient={gradientInsta}
              color="gray.0"
              _focus={{ outline: "none" }}
              _hover={{ opacity: 0.6 }}
            />
          </a>
        </Stack>
      </Flex>
    </Flex>
  )
}