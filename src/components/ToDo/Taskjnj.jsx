import React from 'react';
import { Card, Button } from 'react-bootstrap'

class Task extends React.Component {
    render() {
        const { selectTask, toggleEditTaskModal, selectedTask, deleteTask, task, sendTask, toggleConfirm } = this.props
        return (
            <Card>
                <input checked={selectedTask.has(task.id)} type='checkbox' onChange={() => selectTask(task.id)} />
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Body>
                    <Card.Text></Card.Text>
                    {/* <Button onClick = {()=>deleteTask(task.id)}>Delete</Button> */}
                    <Button onClick={() => toggleConfirm(task)}>Delete</Button>
                    <Button onClick={toggleEditTaskModal}>Edit</Button>
                </Card.Body>

            </Card>
        )
    }
}
export default Task;


