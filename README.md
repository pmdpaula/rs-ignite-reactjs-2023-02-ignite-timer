# React + TypeScript + Vite


## Inicialização do projeto

```bash
yarn create vite
```

## Lint Configuration

O ESLint é instado junto da criação do projeto



- [Prettier](https://prettier.io/docs/en/install.html)

```bash
yarn add -D eslint prettier eslint-config-prettier
```



- [Ordenar as importações - @trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports#readme)

```bash
yarn add -D @trivago/prettier-plugin-sort-imports
```

Este plugin pede para que coloque a ordenação que queremos no arquivo `.prettierrc.json` e ficaram estas opções.

```json
  "importOrder": [
    "^react$",
    "^react-native$",
    "^@react-navigation$",
    "^@storage/(.*)$",
    "^@screens/(.*)$",
    "^@components/(.*)$",
    "^@assets/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
```



## Instalações

- [Styled Components](https://styled-components.com/docs/basics#installation)

```bash
yarn add styled-components
yarn add -D @types/styled-components
```



- [Roteamento - React Router](https://reactrouter.com/en/main/start/tutorial)

```bash
yarn add react-router-dom
```


- [Ícones - Phosphor Icons](https://phosphoricons.com/)

```bash
yarn add phosphor-react
```
