import React, { useState } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import TodoApp from '../components/TodoApp'
import { Todo } from '../types/todo'
import { nanoid } from 'nanoid'

const todoList: Todo[] = [
  { id: nanoid(), text: 'AAA', color: 'is-danger', done: true },
  { id: nanoid(), text: 'BBB', color: 'is-success', done: false },
  { id: nanoid(), text: 'CCC', color: 'is-link', done: true },
  { id: nanoid(), text: 'DDD', color: 'is-warning', done: false },
]

const Index: NextPage = (props) => {
  const [todos, setTodos] = useState(todoList)
  return (
    <TodoApp todos={todos} setTodos={setTodos} />
  )
}

export default Index