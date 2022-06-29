import { useEffect, useState } from "react";
import { Flex, Img } from "@chakra-ui/react";

import { api } from "../../services/api";

interface IAvatarData {
  name: string;
  avatar_url: string;
}

export function AvatarUrl() {

  const [userImg, setUserImg] = useState<IAvatarData>()

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/Guss-droid")

      setUserImg(res.data)
    }

    fetchData()
  }, [])

  return (
    <Flex borderWidth={1} borderColor="gray.150" borderRadius={99999}>
      <Img
        alt={userImg?.name}
        src={userImg?.avatar_url}
        w={64}
        h={64}
        borderRadius={9999}
        zIndex={3}
      />
    </Flex>
  )
}