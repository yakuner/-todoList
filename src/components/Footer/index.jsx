import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    // 设置全选设置
    allCheck = ()=>{
        return (event)=>{
            const {target:{checked}} = event
           // console.log(checked)
           this.props.allCheckTodo(checked)
        }
    }
    // 设置清除任务按钮逻辑
    clearCheckDone = ()=>{
        return ()=>{
            this.props.clearCheckDone()
        }
    }
    render() {
        // 获取传入todos数组
        const {todos} = this.props
        // 设置完成数量
        const allDone = todos.length
        //设置完成数量
        const haveDone = todos.reduce( (acc,todo)=>{
            return acc + (todo.done ? 1 : 0)
        },0)
        //全选按钮勾选状态
        const allCheckedUpdate = allDone === haveDone && haveDone
        return (
            <div className="todo-footer">
                <label>
                      <input type="checkbox" checked={allCheckedUpdate} onChange={this.allCheck()}/><span>完成{haveDone}</span>/<span>总数{allDone}</span>
                </label>
                <button onClick={this.clearCheckDone()} className="btn btn-danger" >清除已完成任务</button>
            </div>
        )
    }
}
