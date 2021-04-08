import React from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import idGenerator from './idGenerator';
import PropTypes from 'prop-types';

class NewTask extends React.Component {
    state = {
        title: '',
        description: ''
    }
    createTask = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim();
        const newTask = {
            title,
            description,
            id: idGenerator(),
        }
        this.setState({
            title: '',
            description: '',
        })
        this.props.addTask(newTask)
    }
   
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        })
    }

    handleKeyPress = (event) => {
        if (this.state.title === "") {
            return
        }
        if (event.key === 'Enter') {
            this.createTask();
            this.props.toggleNewTaskModal()
        }
    }

    handelSubmit = () => {
        if (!this.state.title) {
            return
        }
        this.createTask();
        this.props.toggleNewTaskModal()

    }

    render() {
        const { onClose } = this.props;
        return (
            <>
                <Modal
                    show={true}
                    onHide={onClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add new Task
                </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl maxLength="10"
                            name='title'
                            placeholder="Title"
                            // onChange={(event) => this.handleChange(event.target.value, 'title')}
                            onChange = {this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            className='mb-3'
                        />
                        <FormControl
                            name='description'
                            placeholder='Description'
                            as="textarea" rows={3}
                            // onChange={(event) => this.handleChange(event.target.value, 'description')} 
                            onChange = {this.handleChange}
                            
                            />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={this.handelSubmit}
                            variant='success'
                        >Add
                        </Button>
                        <Button
                            onClick={onClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}
NewTask.propTypes = {
    onClose: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired
}
export default NewTask;
