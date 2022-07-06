import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useColorMode } from "@chakra-ui/react";

interface IActiveLink extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: IActiveLink) {

  let isActive = false
  const router = useRouter()
  const { colorMode } = useColorMode()
  const asPathWithoutBar = router.asPath.replace("/", "")
  console.log(asPathWithoutBar, rest.href)

  if (asPathWithoutBar === rest?.href || rest?.as) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "teal.500" : (colorMode === "dark" ? "gray.0" : "gray.1000"),
        fontWeight: isActive ? 600 : 400,
      })}
    </Link>
  )
}