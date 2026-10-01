import { useMemo, useState } from 'react'
import { TodoProvider } from './context/TodoContext.jsx'
import { useTodos } from './hooks/useTodos.js'
import { TodoFilters } from './components/TodoFilters.jsx'
import { TodoForm } from './components/TodoForm.jsx'
import { TodoList } from './components/TodoList.jsx'
import './Todo.css'

function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()
  const [filter, setFilter] = useState('all')

  const counts = useMemo(() => {
    const completed = todos.filter((todo) => todo.completed).length
    return { all: todos.length, completed, pending: todos.length - completed }
  }, [todos])

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    if (filter === 'pending') return todos.filter((todo) => !todo.completed)
    return todos
  }, [filter, todos])

  return (
    <main className="workspace">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ritmo, início">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>ritmo</span>
        </a>
        <p className="topbar-date">SUA ROTINA, COM MAIS CLAREZA</p>
      </header>

      <section className="intro" id="inicio" aria-labelledby="page-title">
        <div className="intro-copy">
          <p className="eyebrow">SEU ESPAÇO, NO SEU TEMPO</p>
          <h1 id="page-title">Um passo<br />de cada vez<span>.</span></h1>
          <p className="intro-description">
            Tire as ideias da cabeça e leve o que importa para o próximo passo.
          </p>
        </div>
        <div className="progress-note" aria-live="polite">
          <span className="progress-number">{counts.completed}</span>
          <span className="progress-label">
            {counts.completed === 1 ? 'tarefa concluída' : 'tarefas concluídas'}
          </span>
          <span className="progress-rule" aria-hidden="true" />
          <span className="progress-total">
            {counts.pending === 0 && counts.all > 0
              ? 'Tudo em dia. Bom trabalho.'
              : `${counts.pending} ${counts.pending === 1 ? 'pendente' : 'pendentes'}`}
          </span>
        </div>
      </section>

      <section className="todo-panel" aria-label="Sua lista de tarefas">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">LISTA PESSOAL</p>
            <h2>O que vamos fazer?</h2>
          </div>
          <span className="task-total" aria-label={`${counts.all} tarefas no total`}>
            {String(counts.all).padStart(2, '0')}
          </span>
        </div>

        <TodoForm onAdd={addTodo} />
        <div className="list-toolbar">
          <span className="list-label">SUAS TAREFAS</span>
          <TodoFilters activeFilter={filter} counts={counts} onChange={setFilter} />
        </div>
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>

      <footer className="page-footer">
        <span>Feito para cuidar do que importa.</span>
        <span className="footer-spark" aria-hidden="true">*</span>
      </footer>
    </main>
  )
}

function App() {
  return <TodoProvider><TodoPage /></TodoProvider>
}

export default App