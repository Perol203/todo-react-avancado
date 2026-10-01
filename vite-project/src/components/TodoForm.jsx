import { useState } from 'react'

export function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanTitle = title.trim()
    if (!cleanTitle) return
    onAdd(cleanTitle)
    setTitle('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="new-todo">Nova tarefa</label>
      <span className="form-plus" aria-hidden="true">+</span>
      <input
        id="new-todo"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Escreva uma tarefa..."
        maxLength={120}
        autoComplete="off"
      />
      <button type="submit" disabled={!title.trim()}>Adicionar tarefa</button>
    </form>
  )
}