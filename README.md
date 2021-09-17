# Modelo básico de Next.js

Este modelo básico inclui algumas alterações pessoais em relação ao projeto padrão de **Next.js**, dentre elas:
- Novo esquema de pastas;
- Com arquivos pré-configurados;
- Configurado para Typescript;
- Eslint e Prettier configurados;
- Toda a configuração foi feita usando Yarn.

## Esquema de pastas

**SRC:** esta pasta inclui todas as partes do projeto, organizados por:
- Components: arquivos de componentes;
- Data: arquivos de dados em formato JSON;
- Functions: funções para a parte lógica;
- Models: classes utilizadas como modelos;
- Pages: as páginas do projeto;
- Styles: todos os estilos em SASS.

**PUBLIC:** contem tudo aquilo que será de acesso público:
- Icons: ícones a serem utilizados;
- Images: todas as imagens;
- Vectors: todos os vetores.

> Lembrando que estas pastas podem ser alteradas a vontade de acordo com a necessidade do projeto, este é só um modelo.

## Linhas do SASS/SCSS

Por padrão este projeto utiliza o pré-processador SAAS, mas para que as variáveis funcionem corretamente nos estilos dos componentes é importante que carregue a linha `@import "vendor/_defaults"`


### Breakpoints

Para definir um breakpoint carregue o comando:
```
@include breakpoint('TAMANHO'){
    // Código
  }
```

Onde:
- **small-only** = < 600px
- **small-up** = > 600px
- **medium-only** = < 900px
- **medium-up** = > 900px
- **large-only** = < 1200px
- **large-up** = > 1200px

### Z-Index

Existem variáveis com z-index pré-definidos, para isso utilize, sem aspas, o padrão: `z-index: z-index(VALOR)`, onde:
- **above** = 500
- **modal** = 400
- **overlay** = 300
- **dropdown** = 200
- **default** = 1
- **below** = -1

### Cores Globais

Também tem as variáveis de cores globais (root), onde utiliza-se `color: --color-esquema-nome`, onde a personalização deve ser feita em `@import "vendor/_colors"` que já vem com alguns modelos pré-carregados.

### Converter pixels para rem

O ideal é que utilize sempre REM no lugar de PIXELS para a maior parte do código, então utilize `rem(valor em px)`, pois o próprio SCSS fará a conversão. Por exemplo `rem(12)` que seria 12px será convertido para `1.33rem`.

### Outras variáveis

A pasta `@import "vendor/_variables"` conta com outras variáveis de medida e padrões.



Última alteração em **02 de setembro de 2021**.
