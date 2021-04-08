import { Modal,FormControl,Button } from 'react-bootstrap';
import React from 'react';
import idGenerator from './idGenerator'


class NewTask extends React.Component {
    state = {
        title: '',
        description: '',
    }
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value,
        })
    }
    createTask = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim()
        if(title === ''){
            return
        }
        const newTask = {
            title,
            description,
            id:idGenerator(),
        }
        this.props.addTask(newTask)
    }

    handleSubmit = () => {
        this.createTask();
        this.props.toggleNewTaskModal()
    }
    render(){
        return (
            <Modal
            show = {true}>
              
                <Modal.Body>
            <FormControl name = 'title' onChange = {this.handleChange}/>
            <FormControl name = 'description' onChange = {this.handleChange} as = 'textarea'/>
            <Button onClick = {this.handleSubmit}>Create</Button>
            <Button onClick = {this.props.toggleNewTaskModal}>Cancel</Button>
                </Modal.Body>
            </Modal>
        )
    }
}
export default NewTask;