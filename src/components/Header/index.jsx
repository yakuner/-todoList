import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    // 设置一个初始值
    addTodos = (event)=>{
        const {key,target} = event
        // 进行输入校验,阻止瞎几把输入的用户
        if(key === 'Enter' && target.value.trim() && isNaN(+target.value)){
            const {addTodo} = this.props
            const{value:name} = target
            // 创建一个对象
            const todo = { id:Date.now(), name,done:false}
            addTodo(todo)
            target.value = ''
        }
    }
    render() {
        return (

            <div className="todo-header">
                 <input onKeyUp={this.addTodos} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
