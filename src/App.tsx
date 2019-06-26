import React from 'react';
import logo from './logo.svg';
import { store } from './redux/store'
import List from './components/List'
import { Todos, Goals } from './containers'
import API from './api';
import { receiveDataAction } from './redux/actions';

export default class App extends React.Component {
  api: API;

  constructor(){
    super({})
    this.api = new API()
  }

  componentDidMount(){
    store.subscribe( () => this.forceUpdate())
    Promise.all([
      this.api.fetchGoals(),
      this.api.fetchTodos()
    ]).then(([goals, todos]) => {
      // Add to store
      store.dispatch(receiveDataAction(goals, todos))
    }).catch()
  }

  render(){

    const { todos, goals, loading } = store.getState()

    if(loading) {
      return (<h1>Loading</h1>)
    }

    return (
      <div className="App">
  
        <Todos store={store} todos={todos}/>
        <Goals store={store} goals={goals}/>
      </div>
    );
  }

}
