(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o,a,i,r=n(0),c=n.n(r),u=n(10),l=n.n(u),s=(n(20),n(1)),d=n(2),f=n(4),h=n(3),p=n(5),v=n(6);!function(e){e.ADD_TODO="ADD_TODO",e.REMOVE_TODO="REMOVE_TODO",e.TOGGLE_TODO="TOGGLE_TODO",e.RECIEVE_DATA="RECIEVE_DATA"}(o||(o={})),function(e){e.ADD_GOAL="ADD_GOAL",e.REMOVE_GOAL="REMOVE_GOAL",e.RECIEVE_DATA="RECIEVE_DATA"}(a||(a={})),function(e){e.RECIEVE_DATA="RECIEVE_DATA"}(i||(i={}));var m=n(11),O=n(13),g=Object(v.createStore)(Object(v.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.todo;switch(t.type){case o.ADD_TODO:return n?e.concat(n):e;case o.REMOVE_TODO:return n?e.filter(function(e){return e.id!==n.id}):e;case o.TOGGLE_TODO:return n?e.map(function(e){return e.id===n.id?Object.assign({},e,{complete:!e.complete}):e}):e;case o.RECIEVE_DATA:return t.todos||e;default:return e}},goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.goal;switch(t.type){case a.ADD_GOAL:return n?e.concat(n):e;case a.REMOVE_GOAL:return n?e.filter(function(e){return e.id!==n.id}):e;case a.RECIEVE_DATA:return t.goals||e;default:return e}},loading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case o.RECIEVE_DATA:return!1;default:return e}}}),Object(m.composeWithDevTools)(Object(v.applyMiddleware)(function(e){return function(e){return function(t){if(t.type!==o.ADD_TODO||!t.todo||"bitcoin"!==t.todo.name)return e(t);alert("Unacceptable")}}},O.a,function(e){return function(t){return function(n){console.group(n.type),console.log("The current action: ".concat(JSON.stringify(n)));var o=t(n);return console.log("The new state: ".concat(JSON.stringify(o))),console.log("Total state ".concat(JSON.stringify(e.getState()))),console.groupEnd(),o}}}))),E=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("ul",null,this.props.items.map(function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("span",{onClick:function(){e.props.toggle&&e.props.toggle(t)},style:{textDecoration:t.complete?"line-through":""}},t.name),c.a.createElement("button",{onClick:function(){return e.props.remove(t)}},"X"))}))}}]),t}(c.a.Component),T=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,null,[{key:"addTodoAction",value:function(e){return{type:o.ADD_TODO,todo:e}}},{key:"toggleTodoAction",value:function(e){return{type:o.TOGGLE_TODO,todo:e}}},{key:"removeTodoAction",value:function(e){return{type:o.REMOVE_TODO,todo:e}}},{key:"handleDeleteTodo",value:function(e,t){var n=this;return function(o){return o(n.removeTodoAction(e)),t.deleteTodo(e.id).catch(function(){o(n.addTodoAction(e)),alert("Delete todo failed, try again")})}}},{key:"handleToggleTodo",value:function(e,t){var n=this;return function(o){o(n.toggleTodoAction(e)),t.saveTodoToggle(e.id).then().catch(function(){o(n.toggleTodoAction(e)),alert("Toggle went wrong :( ")})}}},{key:"handleSaveTodo",value:function(e,t,n){var o=this;return function(a){t.saveTodo(e).then(function(e){n(),a(o.addTodoAction(e))}).catch(function(){alert("Adding todo failed, try again")})}}}]),e}(),A=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,null,[{key:"addGoalAction",value:function(e){return{type:a.ADD_GOAL,goal:e}}},{key:"removeGoalAction",value:function(e){return{type:a.REMOVE_GOAL,goal:e}}},{key:"handleAddGoal",value:function(e,t,n){var o=this;return function(a){t.saveGoal(e).then(function(e){n(),a(o.addGoalAction(e))}).catch(function(){alert("Save goal failed, try again")})}}},{key:"handleRemoveGoal",value:function(e,t){var n=this;return function(o){o(n.removeGoalAction(e)),t.deleteGoal(e.id).catch(function(){alert("Remove goal failed, try again"),o(n.addGoalAction(e))})}}}]),e}(),y=n(14),D=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,null,[{key:"receiveDataAction",value:function(e,t){return{type:i.RECIEVE_DATA,todos:t,goals:e}}},{key:"handleReceiveData",value:function(e){var t=this;return function(n){Promise.all([e.fetchGoals(),e.fetchTodos()]).then(function(e){var o=Object(y.a)(e,2),a=o[0],i=o[1];n(t.receiveDataAction(a,i))}).catch()}}}]),e}(),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).input=void 0,n.addItem=function(e){e.preventDefault();var t=n.input.value;""!==t&&n.props.store.dispatch(T.handleSaveTodo(t,n.props.api,function(){n.input.value=""}))},n.removeItem=function(e){n.props.store.dispatch(T.handleDeleteTodo(e,n.props.api))},n.toggleItem=function(e){n.props.store.dispatch(T.handleToggleTodo(e,n.props.api))},n.input={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Todo List"),c.a.createElement("input",{type:"text",placeholder:"Add Todo",ref:function(t){return e.input=t}}),c.a.createElement("button",{onClick:this.addItem},"Add Todo"),c.a.createElement(E,{items:this.props.todos,remove:this.removeItem,toggle:this.toggleItem}))}}]),t}(c.a.Component),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).input=void 0,n.addItem=function(e){e.preventDefault();var t=n.input.value;""!==t&&n.props.store.dispatch(A.handleAddGoal(t,n.props.api,function(){n.input.value=""}))},n.removeItem=function(e){n.props.store.dispatch(A.handleRemoveGoal(e,n.props.api))},n.input={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Goals List"),c.a.createElement("input",{type:"text",placeholder:"Add Todo",ref:function(t){return e.input=t}}),c.a.createElement("button",{onClick:this.addItem},"Add Todo"),c.a.createElement(E,{items:this.props.goals,remove:this.removeItem}))}}]),t}(c.a.Component);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e5;return Math.floor(Math.random()*(t-e+1)+e)}var G=function(){function e(){Object(s.a)(this,e),this.goals=[{id:j(),name:"Learn Redux"},{id:j(),name:"Read 50 books this year"}],this.todos=[{id:j(),name:"Walk the dog",complete:!1},{id:j(),name:"Wash the car",complete:!1},{id:j(),name:"Go to the gym",complete:!0}]}return Object(d.a)(e,[{key:"fail",value:function(){return 3===Math.floor(4*Math.random())}},{key:"fetchGoals",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){t(e.goals)},2e3)})}},{key:"fetchTodos",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){t(e.todos)},2e3)})}},{key:"saveTodo",value:function(e){var t=this;return new Promise(function(n,o){setTimeout(function(){var a={id:j(),name:e,complete:!1};t.todos=t.todos.concat([a]),t.fail()?o(a):n(a)},300)})}},{key:"saveGoal",value:function(e){var t=this;return new Promise(function(n,o){setTimeout(function(){var a={id:j(),name:e};t.goals=t.goals.concat([a]),t.fail()?o(a):n(a)},300)})}},{key:"deleteGoal",value:function(e){var t=this;return new Promise(function(n,o){setTimeout(function(){t.goals=t.goals.filter(function(t){return t.id!==e}),t.fail()?o():n(t.goals)},300)})}},{key:"deleteTodo",value:function(e){var t=this;return new Promise(function(n,o){setTimeout(function(){t.todos=t.todos.filter(function(t){return t.id!==e}),t.fail()?o():n(t.todos)},300)})}},{key:"saveTodoToggle",value:function(e){var t=this;return new Promise(function(n,o){setTimeout(function(){t.todos=t.todos.map(function(t){return t.id!==e?t:Object.assign({},t,{complete:!t.complete})}),t.fail()?o():n(t.todos)},300)})}}]),e}(),_=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(f.a)(this,Object(h.a)(t).call(this,{}))).api=void 0,e.api=new G,e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.subscribe(function(){return e.forceUpdate()}),g.dispatch(D.handleReceiveData(this.api))}},{key:"render",value:function(){var e=g.getState(),t=e.todos,n=e.goals;return e.loading?c.a.createElement("h1",null,"Loading"):c.a.createElement("div",{className:"App"},c.a.createElement(b,{store:g,todos:t,api:this.api}),c.a.createElement(k,{store:g,goals:n,api:this.api}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.7935c0f1.chunk.js.map