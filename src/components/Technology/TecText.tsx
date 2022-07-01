import { Text, useColorMode } from "@chakra-ui/react";

interface ITecText {
  tec: number;
}

const texts = [
  { id: 1, text: "React é uma biblioteca Javascript para a criação de UI. Criado em 2011 pelo time do Facebook, ele surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas." },
  { id: 2, text: "React Native é um framework de React, que possibilita a criação de aplicações mobile. A grande diferença do React Native é que todo o código desenvolvido é convertido para a linguagem native do sistema operacional." },
  { id: 3, text: "O NodeJs pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o NodeJs é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados." },
  { id: 4, text: "NextJs é um framework para React. O Next traz algumas funcionalidades diferentes como: A renderização estática pelo lado do servidor e um tratamento de rotas super interessantes. O principal objetivo do Next é trazer mais performance pro React." },
  { id: 5, text: "TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem." },
  { id: 6, text: "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web. O que é ainda mais empolgante é a funcionalidade construída no topo do núcleo da linguagem JavaScript. As APIs proveem a você superpoderes extras para usar no seu código JavaScript." },
  { id: 7, text: "CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas. O CSS é fácil de aprender e entender e é facilmente utilizado com as linguagens de marcação HTML ou XHTML." },
  { id: 8, text: "Criada pelo britânico Tim Berners-Lee o HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. Portanto, ele serve para dar significado e organizar as informações de uma página na web." },
  { id: 9, text: "O SASS é uma linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente." },
  { id: 10, text: "Tailwind CSS foi criado por Adam Wathan e foi inicialmente lançado no dia 1 de Novembro 2017. E um framework de baixo nível que prioriza a utilidade para aplicar CSS. Isso significa que você não precisa muito CSS. Em vez disso você ira escrever numerosas classes para o seus elementos HTML." },
  { id: 11, text: "Chakra UI é uma biblioteca de componentes do React que facilita a construção da IU de um aplicativo ou site. Seu objetivo é fornecer um conjunto de componentes simples, modular e acessível para começar a funcionar rapidamente." },
  { id: 12, text: "Criado pelo engenheiro de software Linus Torvalds, conhecido por ter desenvolvido, também, o núcleo Linux, o GIT é um Sistema de Controle de Versões Distribuído ou DVCS. Estes sistemas de controle possuem a função de registrar quaisquer alterações feitas em cima de um código, armazenando essas informações e permitindo que, caso seja necessário." },
]

export function TecText({ tec }: ITecText) {

  const { colorMode } = useColorMode()
  const tecSelected = texts.find(tecSel => tecSel.id === tec)

  return (
    <Text
      maxW={450}
      fontSize="18"
      borderWidth={1}
      borderRadius={10}
      bg={colorMode === "dark" ? "gray.900" : "gray.100"}
      p={6}
    >
      {tec === 0 ?
        "Clique em algum botão para ver sua descrição"
        :
        tecSelected?.text
      }
    </Text>
  )
}