import { Goal, Todo} from './types'
import { generateId } from './utils'

export default class API {

 fail () {
    return Math.floor(Math.random()*(5-1)) === 3
  }

  public goals: Goal[] = [
    {
      id: generateId(),
      name: 'Learn Redux',
    },
    {
      id: generateId(),
      name: 'Read 50 books this year',
    },
  ];
   public todos: Todo[] = [
    {
      id: generateId(),
      name: 'Walk the dog',
      complete: false,
    },
    {
      id: generateId(),
      name: 'Wash the car',
      complete: false,
    },
    {
      id: generateId(),
      name: 'Go to the gym',
      complete: true,
    }
  ];

  fetchGoals(): Promise<Goal[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.goals)
      }, 2000)
    })
  }

  fetchTodos(): Promise<Todo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.todos)
      }, 2000)
    })
  }

  saveTodo(name: string): Promise<Todo> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const todo = {
          id: generateId(),
          name: name,
          complete: false,
        }
        this.todos = this.todos.concat([todo]);
        this.fail() ? rej(todo) : res(todo);
      }, 300)
    })
  }

  saveGoal(name: string): Promise<Goal> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const goal = {
          id: generateId(),
          name: name,
        }
        this.goals = this.goals.concat([goal]);
        this.fail() ? rej(goal) : res(goal);
      }, 300)
    })
  }

  deleteGoal(id: number): Promise<Goal[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.goals = this.goals.filter((goal) => goal.id !== id);
        this.fail() ? rej(): res(this.goals);
      }, 300)
    });
  }

  deleteTodo(id: number): Promise<Todo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.fail() ? rej(): res(this.todos);
      }, 300)
    });
  }

  saveTodoToggle(id: number): Promise<Todo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todos = this.todos.map((todo) => todo.id !== id ? todo :
          Object.assign({}, todo, {complete: !todo.complete})
        );

        this.fail() ? rej(): res(this.todos);
      }, 300)
    });
  }
}