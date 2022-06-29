import Head from "next/head";
import { Divider, Flex } from "@chakra-ui/react";

import { User } from "../components/User";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gustavo Ré | Dev</title>
      </Head>

      <Flex w="100%" flexDir="column" h="300vh">
        <Header />

        <User />

        <Divider />

      </Flex>
    </>
  )
}