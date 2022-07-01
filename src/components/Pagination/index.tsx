import { Stack, Text } from "@chakra-ui/react";
import { PaginationBtn } from "./PaginationBtn";

interface IPagination {
  totalRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, i) => {
    return from + i + 1
  }).filter(page => page > 0)
}

export function Pagination({
  totalRegisters,
  registersPerPage = 8,
  currentPage = 1,
  onPageChange
}: IPagination) {

  const lastPage = Math.ceil(totalRegisters / registersPerPage)

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPage = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      pb={6}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Stack direction="row" spacing={2} ml={5}>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationBtn onPageChange={onPageChange} page={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" textAlign="center" width="8">...</Text>
            )}
          </>
        )}

        {previousPage.length > 0 && previousPage.map(page => (
          <PaginationBtn onPageChange={onPageChange} page={page} key={page} />
        ))}

        <PaginationBtn onPageChange={onPageChange} page={currentPage} isCurrent />

        {nextPage.length > 0 && nextPage.map(page => (
          <PaginationBtn onPageChange={onPageChange} page={page} key={page} />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + siblingsCount + 1) < lastPage && (
              <Text color="gray.300" textAlign="center" width="8">...</Text>
            )}
            <PaginationBtn onPageChange={onPageChange} page={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}