import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Task extends React.Component {
    checkTask = () => {

    }
    render() {
        const { selectedTask, deleteTask, task, toggleTask, handleEdit } = this.props;
        return (
            <Card>
                <Card.Body>


                    <input type='checkbox' checked={selectedTask.has(task.id)} onChange={() => toggleTask(task.id)} />


                    <Card.Title>
                        {task.title}
                    </Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>

                    <Button onClick={() => deleteTask(task.id)}>Delete</Button>
                    <Button onClick={() => handleEdit(task)}>Edit</Button>

                </Card.Body>
            </Card>
        )
    }
}
export default Task;