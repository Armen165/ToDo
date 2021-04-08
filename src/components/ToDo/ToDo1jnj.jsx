import React from 'react';
import NewTask from './NewTaskjnj';
import { Button } from 'react-bootstrap';
import Task from './Taskjnj';
import Confirm from './Confirmjnj';
import EditTaskModal from './EditTaskModal'
// import { faCommentDots } from '@fortawesome /free-solid-svg-icons';

class ToDo extends React.Component {
    state = {
        tasks: [],
        openNewTaskModal: false,
        selectedTask: new Set(),
        task: '',
        showConfirm: false,
        openEditTaskModal: false,
        editTask:null
    }

    handleEdit = (editTask) => {
        this.setState({
            editTask
        })
    }

    addTask = (newTask) => {
        const tasks = [...this.state.tasks, newTask]
        this.setState({
            tasks,
            editTask
        })

    }
    enterTask = () => {
        this.addTask()
    }

    // selectTask = (id) => {
    //     const {selectedTask} = this.state;
    //     if(selectedTask.has(id)){
    //         selectedTask.delete(id)
    //     } else {
    //         selectedTask.add(id)
    //     }

    //     this.setState({
    //         selectedTask:
    //     })
    // }

   deleteTask = (id) => {
    const {tasks} = this.state;
    const delTask = tasks.filter((fil)=>{
        if(fil.id !== id){
            return true
        }else{
            return false
        }
    })
        this.setState({
            tasks:delTask,
            showConfirm: !this.state.showConfirm

        })
   }

    selectTask = (id, task) => {
        const { selectedTask } = this.state
        if (selectedTask.has(id)) {
            selectedTask.delete(id)
        } else {
            selectedTask.add(id)
        }
        this.setState({
            selectedTask,
            task

        })
    }
    // deleteTask = (id) => {
    //     const { tasks } = this.state;
    //     const delTask = tasks.filter((task) => {
    //         return task.id !== id
    //     })
    //     this.setState({
    //         tasks: delTask,
    //         showConfirm: false
    //     })
    // }

    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        })
    }

    deleteSelected = () => {
        const { selectedTask, tasks } = this.state;
        const delTask = tasks.filter((fil) => {
            if (selectedTask.has(fil.id)) {
                return false
            } else {
                return true
            }

        })
        this.setState({
            tasks: delTask
        })

    }
    toggleConfirm = (task) => {
        this.setState({
            showConfirm: !this.state.showConfirm,
            task
        })
    }
    toggleNewTaskModal = () => {
        this.setState({
         openNewTaskModal:!this.state.openNewTaskModal   
        })
    }
    toggleEditTaskModal = () => {
        this.setState({
            openEditTaskModal: !this.state.editTaskModal
        })
    }
    selectAll = () => {
        const { tasks } = this.state
        const selTask = tasks.map((task) => {
            return task.id
        })
        this.setState({
            selectedTask: new Set(selTask)
        })
    }
    deselectAll = () => {
        this.setState({
            selectedTask: new Set(),
        })
    }

    render() {
        let { firstTask, task } = this.state
        const createTask = this.state.tasks.map((task) => {
            firstTask = task;
            return <Task
           
            toggleEditTaskModal = {this.toggleEditTaskModal}
                toggleConfirm={this.toggleConfirm}
                sendTask={this.sendTask}
                deleteTask={this.deleteTask}
                key={task.id}
                selectTask={this.selectTask}
                selectedTask={this.state.selectedTask}
                task={task} />
        })
        return (
            <div>
                {this.state.openNewTaskModal && <NewTask
                    addTask={this.addTask}
                    toggleNewTaskModal={this.toggleNewTaskModal} />}
                {this.state.showConfirm && <Confirm task={task}
                toggleConfirm
                 deleteTask={this.deleteTask} />}
                {this.state.openEditTaskModal && <EditTaskModal editTask = {this.state.editTask}/>}
            

                <Button onClick={this.toggleNewTaskModal}>Create Task</Button>
                <Button onClick={this.selectAll}>Select All</Button>
                <Button onClick={this.deselectAll}>Deselect All</Button>
                <Button onClick={() => this.deleteSelected()}>Delete Selected</Button>
                {createTask}

            </div>
        )
    }
}
export default ToDo