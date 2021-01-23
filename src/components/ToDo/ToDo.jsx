import React from 'react';
import idGenerator from './idGenerator'

class ToDo extends React.Component {
    state = {
        text: '',
        tasks: [],
        selectedTasks:new Set()
        

    }
    changeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    addTask = () => {
        const text = this.state.text.trim();
        if (!text) {
            return
        }
        const newTask = {
            id: idGenerator(),
            title: text
        }
        const tasks = [...this.state.tasks, newTask]
        this.setState({
            tasks,
            text: ''
        })
    }
    deleteTask = (taskId) => {
        const filterTask = this.state.tasks.filter((f)=>{
            return f.id!==taskId
        })
        const {selectedTasks} =this.state;
        if(selectedTasks.has(taskId)){
            selectedTasks.delete(taskId)
        }
        this.setState({
            tasks:filterTask,
            selectedTasks
        })
    }
    toggleTask = (check) => {
        const selectedTasks = new Set(this.state.selectedTasks);
        if( selectedTasks.has(check)){
            selectedTasks.delete(check)
        }else{
            selectedTasks.add(check)
        }
        this.setState({
            selectedTasks
        })
    }

    removeSelected = ()=>{
        const newItem = this.state.tasks.filter((k)=>{
            if(this.state.selectedTasks.has(k.id)){
                return false
            }else{
                return true
            }
        })
        this.setState({
            tasks:newItem,
            selectedTasks:new Set()
        })
    }

    render() {
        const list = this.state.tasks.map((item,index) => {
            return <div key = {index}>
                <li>{item.title}</li>
                <button onClick = {()=>{this.deleteTask(item.id)}}>Del</button>
                <input type = 'checkbox' onChange = {()=>{this.toggleTask(item.id)}}/>

            </div>
        })
        return (
            <div>
                <input value={this.state.text} onChange={this.changeText} />
                <button onClick={this.addTask}>Add</button>
                <ol>
                    {list}
                </ol>
                <button onClick = {this.removeSelected}>Delete selected</button>
            </div>
        )
    }


}
export default ToDo;