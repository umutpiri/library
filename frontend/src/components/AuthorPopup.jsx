import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

export class AuthorPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { err: '' };

    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(props) {}

  submit(author) {
    console.log(author);
    if (this.props.modalTitle.includes('Add')) {
      axios
        .post('http://localhost:8080/api/author', author)
        .then(res => {
          this.props.save();
          console.log(res);
        })
        .catch(err => this.setState({ err }));
    } else {
      axios
        .put('http://localhost:8080/api/author/edit', author)
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
              id: this.props.author.id,
              firstName: this.props.author.firstName,
              lastName: this.props.author.lastName
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    placeholder="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
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
