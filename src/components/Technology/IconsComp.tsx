import { Button, ButtonProps, Icon, Tooltip } from "@chakra-ui/react";
import { ElementType } from "react";

interface IIconsComp extends ButtonProps {
  label: string;
  icon: ElementType;
}

export function IconsComp({ label, icon, ...rest }: IIconsComp) {
  return (
    <Tooltip label={label} aria-label="Tec Icons" hasArrow>
      <Button
        _focus={{ outline: "none" }}
        _hover={{ opacity: 0.6 }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
      </Button>
    </Tooltip>
  )
}