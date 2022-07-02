import { Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Pagination } from "../Pagination";
import { Repository } from "../Repository";

interface IRepositories {
  name: string;
  private: boolean;
  html_url: string;
  created_at: Date;
  stargazers_count: number;
  language: string;
  visibility: string;
  id: string;
}

export function Repositories() {

  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [repository, setRepository] = useState<IRepositories[]>([])

  useEffect(() => {
    async function fetchRepos() {
      const res = await api.get("/Guss-droid/repos")

      setTotalCount(res.data.length)
    }

    fetchRepos()
  }, [])

  useEffect(() => {
    async function fetchRepos() {
      const res = await api.get(`/Guss-droid/repos?page=${page}&per_page=8`)

      setRepository(res.data)
    }

    fetchRepos()
  }, [page,])

  return (
    <Flex id="myRepos" mt={10} w="100%" justify="center">
      <Flex mt={16} mx={8} align="center" flexDir="column">
        <Text fontWeight="600" fontSize="32">Meus projetos</Text>

        <Grid
          templateColumns={["2fr 2fr", "2fr 2fr", "repeat(2, 1fr)" ,"repeat(4, 2fr)"]}
          gap={6}
          w="100%"
        >
          {repository.map(repo => (
            <Repository key={repo.id} repository={repo} />
          ))}
        </Grid>

        <Pagination
          totalRegisters={totalCount}
          currentPage={page}
          onPageChange={setPage}
        />
      </Flex>
    </Flex>
  )
}