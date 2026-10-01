import { createContext, useCallback, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('ritmo-todos', [])

  const addTodo = useCallback((title) => {
    const todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodos((currentTodos) => [todo, ...currentTodos])
  }, [setTodos])

  const toggleTodo = useCallback((id) => {
    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }, [setTodos])

  const deleteTodo = useCallback((id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }, [setTodos])

  const value = useMemo(
    () => ({ todos, addTodo, toggleTodo, deleteTodo }),
    [todos, addTodo, toggleTodo, deleteTodo],
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export { TodoContext }