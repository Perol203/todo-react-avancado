import { memo } from 'react'

const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendentes' },
  { id: 'completed', label: 'Concluídas' },
]

export const TodoFilters = memo(function TodoFilters({ activeFilter, counts, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tarefas">
      {filters.map((filter) => (
        <button
          className={activeFilter === filter.id ? 'filter-button is-active' : 'filter-button'}
          key={filter.id}
          type="button"
          aria-pressed={activeFilter === filter.id}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}<span>{counts[filter.id]}</span>
        </button>
      ))}
    </div>
  )
})