import React from 'react';
import idGenerator from './idGenerator';
import { Card, Button, InputGroup, FormControl, Col, Container, Row } from 'react-bootstrap'
class ToDo1 extends React.Component {
    state = {
        text: '',
        tasks: [],
        selectedTasks: new Set()
    }

    changeText = (event) => {
        this.setState({
            text: event.target.value,
        })
    }
    addTask = () => {
        const text = this.state.text.trim();

        if (text === '') {
            return
        }
        const newTask = {
            title: text,
            id: idGenerator()
        }
        let { tasks } = this.state;
        tasks = [...tasks, newTask]
        this.setState({
            tasks,
            text: ''
        })
    }
    deleteTask = (idTask) => {
        const { tasks } = this.state;

        let filterTask = tasks.filter((fil) => {
            return idTask !== fil.id
        })
        this.setState({
            tasks: filterTask
        })
    }
    toggleTask = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks);
        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId)
        } else {
            selectedTasks.add(taskId)
        }

        this.setState({
            selectedTasks
        })
    }
    removeSelected = () => {
        const { selectedTasks, tasks } = this.state;
        const newTasks = tasks.filter((task) => {
            if (selectedTasks.has(task.id)) {
                return false;
            }
            return true;
        });

        this.setState({
            tasks: newTasks,
            selectedTasks: new Set()
        })
    }
    render() {
        const { tasks, selectedTasks, text } = this.state;
        const createTask = tasks.map(item => {
            return (
                <Col key={item.id}
                    xl={4}
                    sm={6}>

                    <Card >
                        <Card.Body>
                            <input type='checkbox'
                                onChange={() => { this.toggleTask(item.id) }} />
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                        {item.id}
                            </Card.Text>
                            <Button variant="primary" onClick={() => { this.deleteTask(item.id) }}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>

            )
        })
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl
                                    value={this.state.text} onChange={this.changeText}
                                    placeholder='Create your task'
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={this.addTask}>Button</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Button
                            variant='danger'
                            disabled={!selectedTasks.size}
                            onClick={this.removeSelected}>
                            Delete selected
                            </Button>
                    </Row>

                    <Row>
                        {createTask}

                    </Row>

                </Container>

            </div>
        )
    }
}
export default ToDo1;