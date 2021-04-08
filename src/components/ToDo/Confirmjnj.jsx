import { Modal, Button } from 'react-bootstrap';
import React from 'react';

class Confirm extends React.Component {
    render() {
        const {deleteTask,task,toggleConfirm} = this.props
        return (
            <Modal
                show={true}
            >
                <Modal.Body>
                    <Modal.Title>Are you sure want to delete task</Modal.Title>
                    <Button onClick = {()=>deleteTask(task.id)}>delete</Button>
                    <Button onClick = {toggleConfirm}>cancel</Button>
                </Modal.Body>
            </Modal>
        )
    }
}
export default Confirm;