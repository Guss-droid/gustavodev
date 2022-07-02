import Head from "next/head";
import { Divider, Flex, useBreakpointValue } from "@chakra-ui/react";

import { User } from "../components/User";
import { Header } from "../components/Header";
import { Technology } from "../components/Technology";
import { Repositories } from "../components/Repositories";
import { SocialMedia } from "../components/SocialMedia";
import { Footer } from "../components/Footer";

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Head>
        <title>Gustavo Ré | Dev</title>
      </Head>

      <Flex w="100%" flexDir="column">
        {isWideVersion && <Header />}

        <User />

        <Divider mt={8} />

        <Technology />

        <Divider mt={16} />

        <Repositories />

        <Divider mt={10} />

        <SocialMedia />

        <Footer />
      </Flex>
    </>
  )
}