import React, { useCallback, useState } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import { Todo } from '../types/todo'
import Layout from './Layout'
import { nanoid } from 'nanoid'

interface Props {
  todos: Todo[]
  setTodos: Function,
}

const TodoApp = ({ todos, setTodos }: Props) => {
  const [newTodoText, setNewTodoText] = useState('')
  const onSubmitAdd = useCallback((e) => {
    e.preventDefault()
    if (newTodoText) {
      setTodos(todos => [...todos, { id: nanoid(), text: newTodoText, done: false }])
      setNewTodoText('')
    }
  }, [newTodoText])
  const onRemoveTodo = useCallback((id: string) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [todos])
  const onToggleTodo = useCallback((id: string) => {
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
    setTodos(newTodos)
  }, [todos])
  return (
    <Layout>
      <TodoInput
        todoField={newTodoText}
        handleField={setNewTodoText}
        onSubmitAdd={onSubmitAdd}
      />
      <TodoList
        todos={todos}
        onRemoveTodo={onRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    </Layout>
  )
}


export default TodoApp