import React from 'react';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

export class BookPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: '' };
  }

  submit(book, title) {
    book['author'] = JSON.parse(book.author);
    book['publisher'] = JSON.parse(book.publisher);
    console.log(book);
    if (title.includes('Add')) {
      axios
        .post('http://localhost:8080/api/book', book)
        .then(res => {
          this.props.save();
          console.log(res);
        })
        .catch(err => this.setState({ err }));
    } else {
      axios
        .put('http://localhost:8080/api/book/edit', book)
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
            onSubmit={book => this.submit(book, this.props.modalTitle)}
            initialValues={{
              id: this.props.book.id,
              title: this.props.book.title ? this.props.book.title : '',
              author: this.props.book.author
                ? JSON.stringify(this.props.book.author)
                : '',
              publisher: this.props.book.publisher
                ? JSON.stringify(this.props.book.publisher)
                : '',
              price: this.props.book.price ? this.props.book.price : '',
              category: this.props.book.category
                ? this.props.book.category
                : '',
              date: this.props.book.date
                ? this.props.book.date.split(' ').length > 0
                  ? this.props.book.date.split(' ')[0]
                  : ''
                : ''
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    placeholder="Title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      as="select"
                      placeholder="Select Author"
                      name="author"
                      value={values.author}
                      onChange={handleChange}
                    >
                      {this.props.authors.map(author => (
                        <option value={JSON.stringify(author)} key={author.id}>
                          {author.firstName + ' ' + author.lastName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control
                      as="select"
                      placeholder="Select Publisher"
                      name="publisher"
                      value={values.publisher}
                      onChange={handleChange}
                    >
                      {this.props.publishers.map(publisher => (
                        <option
                          value={JSON.stringify(publisher)}
                          key={publisher.id}
                        >
                          {publisher.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Control
                    placeholder="Price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Date"
                    type="date"
                    name="date"
                    value={values.date}
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
