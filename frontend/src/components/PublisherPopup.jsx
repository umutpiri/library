import React from 'react';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

export class PublisherPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { err: '' };

    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(props) {}

  submit(publisher) {
    if (this.props.modalTitle.includes('Add')) {
      axios
        .post('http://localhost:8080/api/publisher', publisher)
        .then(res => {
          this.props.save();
          console.log(res);
        })
        .catch(err => this.setState({ err }));
    } else {
      axios
        .put('http://localhost:8080/api/publisher/edit', publisher)
        .then(res => {
          this.props.save();
          console.log(res);
        })
        .catch(err => this.setState({ err }));
    }
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        size="lg"
        onHide={this.props.hide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.err}
          <Formik
            onSubmit={this.submit}
            initialValues={{
              id: this.props.publisher.id,
              name: this.props.publisher.name,
              address: this.props.publisher.address,
              phone: this.props.publisher.phone
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center mb-3">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    );
  }
}
