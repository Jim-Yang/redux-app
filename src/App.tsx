import React from 'react';
import logo from './logo.svg';
import { store } from './redux/store'
import List from './components/List'
import { Todos, Goals } from './containers'

export default class App extends React.Component {

  componentDidMount(){
    store.subscribe( () => this.forceUpdate())
  }

  render(){

    const { todos, goals } = store.getState()

    return (
      <div className="App">
  
        <Todos store={store} todos={todos}/>
        <Goals store={store} goals={goals}/>
      </div>
    );
  }

}
