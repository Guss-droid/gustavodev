import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AvatarUrl } from "../Avatar";

import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

export function User() {
  return (
    <Flex align="center" gap={8} m={8} ml={20} mt={16}>
      <AvatarUrl />

      <Box>
        <Text fontSize="32" fontWeight="600">
          Gustavo Ré
        </Text>

        <Stack spacing={2} mt={2}>
          <Flex align="center" gap={2} fontSize="18">
            <Icon as={AiOutlineMail} />

            <Text color="gray.500">
              gustavo.re@inforoute.com.br
            </Text>
          </Flex>


          <Flex align="center" gap={2} fontSize="18">
            <Icon as={ImLocation} />

            <Text color="gray.500">
              Brazil
            </Text>
          </Flex>
        </Stack>
      </Box>

      <Flex ml="auto" mr={32} fontWeight="500" fontSize="18">
        <Text maxW={450}>
          Eu tenho 17 anos e comecei a estudar programação quando tinha apenas 15,
          no final de 2020. Inicialmente comece com Js, html e css. Hoje uso bastante
          React, React Native, Next e Node.
        </Text>
      </Flex>
    </Flex>
  )
}