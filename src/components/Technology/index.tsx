import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { TecText } from "./TecText";
import { TecButtons } from "./TecButtons";

export function Technology() {

  const [tec, setTec] = useState(0)

  return (
    <Flex id="myTechnologies" mt={10} w="100%" justify="center">
      <Flex mt={16} w={["75%", "70%", "65%", "65%", "60%", "50%"]} align="center" flexDir="column">
        <Text fontWeight="600" fontSize="32">Tecnologias que conheço</Text>

        <Flex
          justify="space-between"
          w="100%"
          mt={10}
          flexDir={["column", "column", "row", "row"]}
        >
          <TecButtons setTec={setTec} />

          <TecText tec={tec} />
        </Flex>
      </Flex>
    </Flex>
  )
}