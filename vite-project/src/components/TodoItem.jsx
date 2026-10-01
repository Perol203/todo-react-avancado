import { memo } from 'react'

export const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? 'todo-item is-complete' : 'todo-item'}>
      <button
        className="todo-check"
        type="button"
        role="checkbox"
        aria-checked={todo.completed}
        aria-label={todo.completed ? `Reabrir: ${todo.title}` : `Concluir: ${todo.title}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && <span aria-hidden="true">&#10003;</span>}
      </button>
      <span className="todo-title">{todo.title}</span>
      <time className="todo-time" dateTime={todo.createdAt}>
        {new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' })
          .format(new Date(todo.createdAt))}
      </time>
      <button
        className="delete-button"
        type="button"
        aria-label={`Remover: ${todo.title}`}
        onClick={() => onDelete(todo.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  )
})