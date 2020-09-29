import React, { Component } from 'react';
import './App.css';


let ind = 3;
class App extends Component {

  constructor(props) {
    super();

    this.state = {
      name: "",
      email: "",
      value:"",
      todos:[{id:1,name:"Learn React"},{id:2,name:"Learn Redux"}],
    }
    // this.changeName = this.changeName.bind(this);
  }

  //uses its own this
  // changeName(){
  //  this.setState({
  //   name:"waleed khan",
  //   email:"waleed@gmail.com"
  //  })
  // console.log(this)
  // }

  // uses it's parent this
  // changeName = () => {
  //   this.setState({
  //     name: "waleed khan",
  //     email: "waleed@gmail.com"
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    
  }

  submitData = () => {
    this.setState({
      todos:  [ ...this.state.todos,{id:ind++,name:this.state.value}]
    })
  }

  deleteTodo = (i) => {
    console.log(i)
    this.setState({
      todos:this.state.todos.filter((todo) => todo.id !== i)
    })
  }

  updateTodo = (id) => {

  } 


  render() {
    console.log(this.state.todos)
    return (
      <>
        <div className="app">
          <h1>Todo App</h1>
          {/* <h1>Hello {this.state.name}</h1>
          <h1>Hello {this.state.email}</h1>
          <button onClick={this.changeName} >Click Me</button>
          <Child />
        <Child2 /> */}
          <input type="text" placeholder="Enter Name..." onChange={(e) => this.handleChange(e)} value={this.state.value} />
         <button onClick={this.submitData} >Click Me</button>

          <ul>
            {
              this.state.todos.map((todo) => {
               return <li key={todo.id} >{todo.id}) {todo.name} 
               <button onClick={() => this.deleteTodo(todo.id)} > X</button> 
               <button onClick={() => this.updateTodo(todo.id)} > U</button> 
               </li>
              })
            }
          </ul>
        </div>
      </>
    );
  }
}

export default App;
