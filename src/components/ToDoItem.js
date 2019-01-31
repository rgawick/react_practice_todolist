import React, { Component } from 'react'

class ToDoItem extends Component {
   constructor(props){
       super(props)
   }

   removeTodo(id){
       this.props.removeTodo(id)
   }
   render(){
       return(
           <div>
             <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove</button> {this.props.todo.text}
           </div>
       )
   }
}

export default ToDoItem