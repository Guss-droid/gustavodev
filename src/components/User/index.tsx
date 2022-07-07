import { Box, Flex, Icon, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { AvatarUrl } from "../Avatar";

import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

export function User() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      align="center"
      // justify="center"
      gap={8}
      m={8}
      // ml={20}
      mt={10}
      id="aboutMe"
      flexDir={["column", "column", "row", "row"]}
    >
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

      {isWideVersion &&
        <Flex ml="auto" mr={32} fontWeight="500" fontSize="18" mt="10">
          <Text maxW={[650, 520, 520]}>
            Tenho 17 anos e estudo programação desde o final de 2020, quando tinha apenas 15.
            Naquela época, fui à fundo em HTML e CSS e comecei a me aventurar em Javascript.
            Hoje, muito estudo e vários projetos depois, minhas stacks preferidas incluem
            React, React Native, Next.js e Node.js, além de diversas outras ferramentas e
            tecnologias que incorporei ao meu dia-a-dia como desenvolvedor.
          </Text>
        </Flex>
      }
    </Flex>
  )
}