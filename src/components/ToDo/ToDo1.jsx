import React from 'react';
import NewTask from './NewTask';
import Task from './Task';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Confirm from './Confirm';
import PropTypes from 'prop-types'
import EditTaskModal from './EditTaskModal';
class ToDo extends React.Component {

    state = {
        tasks: [],
        showConfirm: false,
        openNewTaskModal: false,
        editTask: false,
        selectedTask: new Set(),


    }
    addTask = (newTask) => {
        let tasks = this.state.tasks;
        tasks = [...tasks, newTask];
        this.setState({
            tasks,

        })
    }

    handleEdit = (editTask) => {
        this.setState({
            editTask
        })
    }
    onClose = () => {
        this.setState({
            editTask: null
        })
    }
    deleteTask = (id) => {
        const { tasks } = this.state;
        const delTask = tasks.filter((fil) => {
            if (fil.id === id) {
                return false
            } else {
                return true
            }
        })
        this.setState({
            tasks: delTask
        })
    }
    removeSelected = () => {
        const { selectedTask, tasks } = this.state;

        const newTasks = tasks.filter((task) => {
            if (selectedTask.has(task.id)) {
                return false;
            }
            else
                return true;
        });

        this.setState({
            tasks: newTasks,
            selectedTask: new Set(),
            showConfirm: false,
        })
    }
    onSave = (editedTask) => {
        let tasks = [...this.state.tasks];
        let num = tasks.findIndex((task) => task.id === editedTask.id)
        tasks[num] = editedTask;
        this.setState({
            tasks
        })
    }
    deleteSelected = () => {
        const { tasks, selectedTask } = this.state;
        const delTask = tasks.filter((fil) => {
            if (selectedTask.has(fil.id)) {
                return false
            } else {
                return true
            }
        })
        this.setState({
            tasks: delTask,
            selectedTask: new Set()
        })
    }

    toggleConfirm = (task) => {
        this.setState({
            showConfirm: !this.state.showConfirm,
            task
        })
    }
    toggleTask = (id) => {
        const { selectedTask } = this.state
        if (selectedTask.has(id)) {
            selectedTask.delete(id)
        } else {
            selectedTask.add(id)
        }
        this.setState({
            selectedTask
        })
    }
    selectAll = () => {
        const { tasks } = this.state;
        const ids = tasks.map((task) => {
            return task.id
        })
        this.setState({
            selectedTask: new Set(ids)
        })
    }
    deselectAll = () => {
        this.setState({
            selectedTask: new Set()
        })
    }
    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        })
    }
    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        })
    }


    render() {
        const { tasks, selectedTask, editTask,showConfirm } = this.state;
        const createTask = tasks.map((task) => {
            return <Task toggleTask={this.toggleTask}
                handleEdit={this.handleEdit}
                toggleConfirm={this.toggleConfirm}
                deleteTask={this.deleteTask}
                key={task.id}
                task={task}
                selectedTask={this.state.selectedTask} />
        })
        return (
            <div>
                <Container >
                    <Row>
                        <Col>
                            <Button variant='outline-secondary'
                                onClick={this.toggleNewTaskModal}
                            >
                                Add New Task
                        </Button>
                        </Col>
                        <Col >
                            <Button
                                disabled={!tasks.length}
                                variant='warning'
                                onClick={this.selectAll}
                            >
                                Select All
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                disabled={!tasks.length}
                                onClick={this.deselectAll}
                                variant='success'
                            >
                                Deselect ALL
                            </Button>
                        </Col>
                        <Col>
                            <Button disabled={!this.state.selectedTask.size}
                                // onClick={this.deleteSelected}
                                variant='danger'
                                onClick={this.toggleConfirm}
                            >Delete Selected
                                </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            {createTask}
                        </Row>
                    </Row>
                </Container>
                { showConfirm &&
                    <Confirm
                        onClose={this.toggleConfirm}
                        onConfirm={this.removeSelected}
                        count={selectedTask.size}
                    />
                }
                {this.state.openNewTaskModal &&
                    <NewTask
                        toggleNewTaskModal={this.toggleNewTaskModal}
                        addTask={this.addTask}
                        onClose={this.toggleNewTaskModal}
                    />
                }

                {this.state.editTask &&
                    <EditTaskModal
                        handleEdit={this.handleEdit}
                        editTask={editTask}
                        onSave={this.onSave}
                        onClose={this.onClose}

                    />}
            </div>
        )
    }
}
NewTask.propTypes = {
    addTask: PropTypes.func.isRequire,
    onClose: PropTypes.func.isRequired
}
export default ToDo