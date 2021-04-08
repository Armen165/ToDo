
import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';


class EditTaskModal extends React.Component {
    state = {
        title: '',
        description: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            ...props.editTask
        }
    }
    handeleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        });
    };



    handelSubmit = () => {
        const title = this.state.title.trim();
        const description = this.state.description.trim();
        if (!this.state.title) {
            return;
        };

        this.props.onSave({
            id: this.state.id,
            title: this.state.title,
            description: this.state.description
        })
        this.props.handleEdit()
    };



    render() {
        return (
            <Modal
                show={true}

            >
                <Modal.Body>
                    <FormControl name='title' onChange={this.handeleChange} value={this.state.title} />
                    <FormControl name='description' as='textarea' onChange={this.handeleChange} value={this.state.description} />
                    <Button onClick={this.handelSubmit}>Save</Button>

                    <Button onClick={this.props.onClose}>Cancel</Button>
                </Modal.Body>
            </Modal>
        )
    }

}
export default EditTaskModal;