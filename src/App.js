
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './app.css'
export default class App extends Component {
    //创建一个用于接收子组件对象的回调并修改数据
    state = {todos:[
        { id:1, name:'吃饭',done:true},
        { id:2, name:'睡觉',done:true},
        { id:3, name:'打豆豆',done:false},
        { id:4, name:'躺着',done:false},
    ]}
    addTodo = (todo) => {
        // 接到值修改初始
        const {todos} = this.state
        this.setState({todos:[todo,...todos]})
    }
    // 按钮点击是否勾选
    checkChange = (id,done)=>{
        // 获取初始状态
        const {todos} = this.state
        // 改变初始状态
     const newTodos = todos.map( (todo)=>{
            // 判断和传进来的id一样的值
         return   todo.id === id ?  {...todo,done} :  todo 
        })
        this.setState({todos:newTodos})
    }
    //编写删除按钮逻辑
    deleteTodo = (id)=>{
        const {todos} = this.state
        // 根据传入的id来进行删除操作
        const newTodos = todos.filter( (todo)=>{
            return todo.id !==id
        })
        this.setState({todos:newTodos})
    }
    // 设置全选/全不选
    allCheckTodo = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map( (todo)=>{
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }
    // 设置清除按钮逻辑
    clearCheckDone = ()=>{
        // 找出所有input值为true的todo,删除
        const {todos} = this.state
        const newTodos = todos.filter( (todo)=>{
            return !todo.done 
        })
        this.setState({todos:newTodos})
    }
    render() {
       
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={this.state.todos} checkChange={this.checkChange} deleteTodo={this.deleteTodo}/>
                <Footer todos={this.state.todos} allCheckTodo={this.allCheckTodo} clearCheckDone={this.clearCheckDone}/>
                </div>
            </div>
              
             
        )
    }
}
