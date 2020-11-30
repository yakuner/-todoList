import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

  // 添加初始化效果
    state ={
      isShow:false,
      isStyle:false
    }
    // 添加一个鼠标移入效果的展示
    saveStyle = (falg)=>{
      
      return ()=>{
        this.setState({isShow:falg,isStyle:falg})
      }
    }
    // 按钮勾选状态/取消
    isCheck = (id)=>{
      return (event)=> {
         const {target} = event
        this.props.checkChange(id,target.checked)
      }
    }
    // 添加删除逻辑
    deleteDone = ()=>{
      return () =>{
        if(window.confirm('请问要删除 '+this.props.name+' 这个任务吗?')){
          this.props.deleteTodo(this.props.id)
        }
      }
    }
    render() {
      const {id,name,done} = this.props  
      //添加点击效果    
        return (  
            <li ref={ c => this.deleteTodo = c} onMouseEnter={this.saveStyle(true,'进入')} onMouseLeave={this.saveStyle(false,'离开')} style={{backgroundColor:this.state.isStyle ? '#ccc' : '#fff'}}>
              <label>
                <input  type="checkbox" checked = {done} onChange={this.isCheck(id)}/>
                  <span>{name}</span>
              </label>
              <button onClick={this.deleteDone(id)} className="btn btn-danger" style={{display:this.state.isShow ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
