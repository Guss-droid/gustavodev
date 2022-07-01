import { Button } from "@chakra-ui/react";

interface IBtnPage {
  page: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationBtn({ page, isCurrent = false, onPageChange }: IBtnPage) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w={4}
        bg="teal.500"
        color="gray.0"
        disabled
        _disabled={{ cursor: "default" }}
        _focus={{ outline: "none" }}
        _hover={{ opacity: 0.8 }}
      >
        {page}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w={4}
      bg="gray.700"
      color="gray.0"
      cursor="pointer"
      onClick={() => onPageChange(page)}
      _hover={{ opacity: 0.4 }}
    >
      {page}
    </Button>
  )
}