import React, { Component } from 'react';
import Galery from './Galery';
import Images from './Images';
import MyNavbar from './MyNavbar';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <Galery />

        <Button color="danger" onClick={this.toggle}>LogIt</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Vvedite nazvanie</ModalHeader>
          <ModalBody>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
