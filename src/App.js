import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import ToDoItem from './components/ToDoItem'

class App extends Component {
  constructor(props){
     super(props)

     this.state = {
       todos: [
          {id: 0, text: "Make dinner tonight!"},
          {id: 1, text: "Walk the Dog."},
          {id: 2, text: "Apply for jobs."}
       ],
       nextId: 3
     }

     this.addTodo = this.addTodo.bind(this)
     this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todoText){
    let todos = this.state.todos.slice()
    todos.push({id: this.state.nextId, text: todoText})
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }


  render() {
    return (
      <div className="App">
         <div className="todo_wrapper">
           <Header/>
           <ToDoInput todoText="" addTodo={this.addTodo}/>
           <ul>
           {
             this.state.todos.map((todo) => {
               return <ToDoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />  }
             )
             }
         </ul>
         </div>
      </div>
    );
  }
}

export default App;
