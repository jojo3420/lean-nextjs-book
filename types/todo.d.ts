type Todo = {
  id: string
  text: string
  color: 'is-danger' | 'is-warning' | 'is-success' | 'is-info' | 'is-link' | 'is-primary'
  done: boolean
}


export {
  Todo,
}