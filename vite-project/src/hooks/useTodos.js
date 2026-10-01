import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodos deve ser utilizado dentro de TodoProvider.')
  return context
}