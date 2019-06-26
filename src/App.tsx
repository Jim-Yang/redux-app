import React from 'react';
import { store } from './redux/store'
import { Todos, Goals } from './containers'
import { DataActions } from './redux/actions'
import API from './api';

export default class App extends React.Component {
  api: API;

  constructor(){
    super({})
    this.api = new API()
  }

  componentDidMount(){
    store.subscribe( () => this.forceUpdate())
    //@ts-ignore
    store.dispatch(DataActions.handleReceiveData(this.api))
  }

  render(){

    const { todos, goals, loading } = store.getState()

    if(loading) {
      return (<h1>Loading</h1>)
    }

    return (
      <div className="App">
  
        <Todos store={store} todos={todos} api={this.api}/>
        <Goals store={store} goals={goals} api={this.api}/>
      </div>
    );
  }

}
