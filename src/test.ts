import API from './api'

const api = new API()

async function getTodos() {
    const todos = await api.fetchTodos()

    todos.forEach(todo => {
        console.log(todo.name)
    })
}

getTodos()