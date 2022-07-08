import { Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";

interface ITecText {
  tec: number;
}

const texts = [
  { id: 1, text: "React é uma biblioteca Javascript para a criação de UI." },
  { id: 2, text: "React Native é um framework de React, que possibilita a criação de aplicações mobile." },
  { id: 3, text: "O NodeJs pode ser definido como um ambiente de execução Javascript server-side." },
  { id: 4, text: "NextJs é um framework para React. O principal objetivo do Next é trazer mais performance pro React." },
  { id: 5, text: "TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript." },
  { id: 6, text: "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web." },
  { id: 7, text: "CSS é a sigla para o termo em inglês Cascading Style Sheets que significa Folha de Estilo em Cascatas." },
  { id: 8, text: "Criada pelo britânico Tim Berners-Lee o HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website." },
  { id: 9, text: "O SASS é uma linguagem de extensão do CSS. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente." },
  { id: 10, text: "Tailwind CSS foi criado por Adam Wathan e foi inicialmente lançado no dia 1 de Novembro 2017. E um framework de baixo nível que prioriza a utilidade para aplicar CSS." },
  { id: 11, text: "Chakra UI é uma biblioteca de componentes do React que facilita a construção da UI de um aplicativo ou site." },
  { id: 12, text: "Criado pelo engenheiro de software Linus Torvalds, conhecido por ter desenvolvido, também, o núcleo Linux, o GIT é um Sistema de Controle de Versões Distribuído ou DVCS." },
]

export function TecText({ tec }: ITecText) {

  const { colorMode } = useColorMode()
  const tecSelected = texts.find(tecSel => tecSel.id === tec)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Text
      maxW={450}
      fontSize="18"
      borderWidth={1}
      borderRadius={10}
      bg={colorMode === "dark" ? "gray.900" : "gray.100"}
      p={6}
      w="100%"
      mt={!isWideVersion ? 8 : 0 }
    >
      {tec === 0 ?
        "Clique em algum botão para ver sua descrição"
        :
        tecSelected?.text
      }
    </Text>
  )
}