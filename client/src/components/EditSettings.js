import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class EditSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (

      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="New a Console"
      >
      <div>Edit Server Settings</div>
        <div className='table'>
          <div>
            <div>Server:</div>
            <div>
              
            </div>
          </div>
        </div>
        <button onClick={this.handleCloseModal}>Cancel</button>
      </Modal>

    );
  }
}