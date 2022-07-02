import Link from "next/link";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

interface IRepository {
  repository: {
    name: string;
    private: boolean;
    html_url: string;
    created_at: Date;
    stargazers_count: number;
    language: string;
    visibility: string;
  }
}

export function Repository({ repository }: IRepository) {

  const formatDate = new Date(repository.created_at).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return (
    <Flex mt={6} flexDir="column" align="left">
      <Text fontSize={["18", "18", "18", "18", "18", "22"]}>
        {repository.name}
      </Text>

      <Text
        fontSize={["12", "12", "12", "12", "12", "14"]}
        color="gray.400"
      >
        Criado em {formatDate}
      </Text>

      <Flex align="center" gap={2} mt={2}>
        {repository.language !== null &&
          <>
            <Box
              borderRadius={9999}
              borderWidth={1}
              borderColor="gray.150"
              bg={repository.language === "TypeScript" ? "blue.600" : "yellow.500"}
              h="4"
              w="4"
            />

            <Text fontSize="15">
              {repository.language}
            </Text>
          </>
        }

        <Icon as={AiOutlineStar} ml={repository.language !== null ? "auto" : ""} />
        <Text mr={3}>{repository.stargazers_count}</Text>
      </Flex>

      <Box display="flex" flexDirection="column" mt={4} gap={2}>
        {repository.private === false &&
          <a target="_blank" href={repository.html_url}>
            <Button
              w="100%"
              bg="teal.600"
              color="gray.0"
              _focus={{ outline: "none" }}
              _hover={{ opacity: 0.6 }}
            >
              Ver no Github
            </Button>
          </a>
        }
      </Box>
    </Flex>
  )
}