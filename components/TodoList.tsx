import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onRemoveTodo, onToggleTodo }) {
  return (
    <>
      {todos && todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onRemoveTodo}
          />
        ),
      )}
    </>
  )
}

export default TodoList