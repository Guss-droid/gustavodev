import Head from "next/head";
import { Divider, Flex } from "@chakra-ui/react";

import { User } from "../components/User";
import { Header } from "../components/Header";
import { Technology } from "../components/Technology";
import { Repositories } from "../components/Repositories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gustavo Ré | Dev</title>
      </Head>

      <Flex w="100%" flexDir="column">
        <Header />

        <User />

        <Divider mt={8} />

        <Technology />

        <Divider mt={16} />

        <Repositories />
      </Flex>
    </>
  )
}