# Todo React Avançado

**Ritmo** é uma lista de tarefas para organizar o dia com simplicidade. Adicione tarefas, marque o que já foi feito, remova itens e alterne entre todas, pendentes e concluídas. A lista fica salva no navegador.

## Tecnologias

- React 19 e Vite
- Context API, `useState`, `useEffect` e `useContext`
- Hook customizado para persistência em `localStorage`
- `useMemo` e `React.memo`
- CSS responsivo com abordagem mobile-first

## Como executar

Requisitos: Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local informado pelo Vite. Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
  components/   # formulário, filtros e lista de tarefas
  context/      # estado global e ações da lista
  hooks/        # persistência e acesso ao Context
  App.jsx
  Todo.css
```
