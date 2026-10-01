import { memo } from 'react'
import { TodoItem } from './TodoItem.jsx'

const emptyMessages = {
  all: ['Sua lista começa aqui.', 'Adicione uma tarefa e organize o que vem pela frente.'],
  pending: ['Tudo em dia.', 'Não há tarefas pendentes por enquanto.'],
  completed: ['Ainda sem conclusões.', 'As tarefas que você concluir aparecem aqui.'],
}

export const TodoList = memo(function TodoList({ todos, filter, onToggle, onDelete }) {
  if (todos.length === 0) {
    const [title, description] = emptyMessages[filter]
    return (
      <div className="empty-state">
        <span className="empty-mark" aria-hidden="true">0</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
})