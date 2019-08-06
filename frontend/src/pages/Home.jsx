import React from 'react';

import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { BookPopup } from '../components/BookPopup';
import { AuthorPopup } from '../components/AuthorPopup';
import { PublisherPopup } from '../components/PublisherPopup';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      authors: [],
      publishers: [],
      showBookPopup: false,
      showAuthorPopup: false,
      showPublisherPopup: false,
      selectedBook: {},
      selectedAuthor: {},
      selectedPublisher: {},
      modalTitle: ''
    };

    this.addBook = this.addBook.bind(this);
    this.addAuthor = this.addAuthor.bind(this);
    this.addPublisher = this.addPublisher.bind(this);
  }

  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
    this.loadPublishers();
  }

  loadBooks() {
    axios
      .get(`http://localhost:8080/api/book`)
      .then(response => {
        var books = response.data;
        this.setState({ books });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  loadAuthors() {
    axios
      .get(`http://localhost:8080/api/author`)
      .then(response => {
        var authors = response.data;
        this.setState({ authors });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  loadPublishers() {
    axios
      .get(`http://localhost:8080/api/publisher`)
      .then(response => {
        var publishers = response.data;
        this.setState({ publishers });
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  addBook() {
    this.setState({
      selectedBook: {},
      modalTitle: 'Add New Book',
      showBookPopup: true
    });
  }

  editBook(book) {
    this.setState({
      selectedBook: book,
      modalTitle: 'Edit Book',
      showBookPopup: true
    });
  }

  deleteBook(id) {
    axios
      .delete('http://localhost:8080/api/book/delete/' + id)
      .then(res => {
        console.log(res);
        this.loadBooks();
      })
      .catch(err => console.log(err));
  }

  addAuthor() {
    this.setState({
      selectedAuthor: {
        firstName: '',
        lastName: ''
      },
      modalTitle: 'Add New Author',
      showAuthorPopup: true
    });
  }

  editAuthor(index) {
    this.setState({
      selectedAuthor: this.state.authors[index],
      modalTitle: 'Edit Author',
      showAuthorPopup: true
    });
  }

  deleteAuthor(id) {
    axios
      .delete('http://localhost:8080/api/author/delete/' + id)
      .then(res => {
        console.log(res);
        this.loadAuthors();
      })
      .catch(err => console.log(err));
  }

  addPublisher() {
    this.setState({
      selectedPublisher: {
        name: '',
        address: '',
        phone: ''
      },
      modalTitle: 'Add New Publisher',
      showPublisherPopup: true
    });
    console.log('ADD PUBLİSHER');
  }

  editPublisher(index) {
    this.setState({
      selectedPublisher: this.state.publishers[index],
      modalTitle: 'Edit Publisher',
      showPublisherPopup: true
    });
  }

  deletePublisher(id) {
    axios
      .delete('http://localhost:8080/api/publisher/delete/' + id)
      .then(res => {
        console.log(res);
        this.loadPublishers();
      })
      .catch(err => console.log(err));
  }

  render() {
    var books = this.state.books.map((book, index) => (
      <div
        style={{ backgroundColor: '#eee' }}
        key={book.id}
        className="row my-3 justify-content-center"
      >
        <div className="col">
          <div className="row">
            <b>title:</b>
            {book.title}
          </div>
          <div className="row">
            <b>author:</b>
            {book.author.firstName + ' ' + book.author.lastName}
          </div>
          <div className="row">
            <b>publisher:</b>
            {book.publisher.name}
          </div>
          <div className="row">
            <b>price:</b>
            {book.price}
          </div>
          <div className="row">
            <b>category:</b>
            {book.category}
          </div>
          <div className="row">
            <b>date:</b>
            {book.date}
          </div>
          <div style={{ height: 30 }} className="row">
            <button
              onClick={() => this.editBook(book)}
              className="btn btn-primary col"
            >
              Edit
            </button>
            <button
              onClick={() => this.deleteBook(book.id)}
              className="btn btn-danger col"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));

    var authors = this.state.authors.map((author, index) => (
      <div key={index} style={{ backgroundColor: '#eee' }} className="my-3 row">
        <div className="col">
          <div className="row">
            <b>name:</b>
            {author.firstName + ' ' + author.lastName}
          </div>
          <div style={{ height: 30 }} className="row">
            <button
              onClick={() => this.editAuthor(index)}
              className="btn btn-primary col"
            >
              Edit
            </button>
            <button
              onClick={() => this.deleteAuthor(author.id)}
              className="btn btn-danger col"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));

    var publishers = this.state.publishers.map((publisher, index) => (
      <div key={index} style={{ backgroundColor: '#eee' }} className="my-3 row">
        <div className="col">
          <div className="row">
            <b>name:</b>
            {publisher.name}
          </div>
          <div className="row">
            <b>address:</b>
            {publisher.address}
          </div>
          <div className="row">
            <b>phone:</b>
            {publisher.phone}
          </div>
          <div style={{ height: 30 }} className="row">
            <button
              onClick={() => this.editPublisher(index)}
              className="btn btn-primary col"
            >
              Edit
            </button>
            <button
              onClick={() => this.deletePublisher(publisher.id)}
              className="btn btn-danger col"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <div style={{ paddingTop: 20 }} className="row justify-content-around">
          <div
            style={{ backgroundColor: '#ccc' }}
            className="col-3 text-center"
          >
            <h2>Books</h2>
            <button
              onClick={this.addBook}
              style={{ position: 'absolute', top: 0, right: 0 }}
              className="btn btn-success"
            >
              +
            </button>
            <div className="col">{books}</div>
          </div>
          <div
            style={{ backgroundColor: '#ccc' }}
            className="col-3 text-center"
          >
            <h2>Authors</h2>
            <button
              onClick={this.addAuthor}
              style={{ position: 'absolute', top: 0, right: 0 }}
              className="btn btn-success"
            >
              +
            </button>
            <div className="col">{authors}</div>
          </div>
          <div
            style={{ backgroundColor: '#ccc' }}
            className="col-3 text-center"
          >
            <h2>Publishers</h2>
            <button
              onClick={this.addPublisher}
              style={{ position: 'absolute', top: 0, right: 0 }}
              className="btn btn-success"
            >
              +
            </button>
            <div className="col">{publishers}</div>
          </div>
        </div>
        <BookPopup
          show={this.state.showBookPopup}
          hide={() => this.setState({ showBookPopup: false })}
          book={this.state.selectedBook}
          modalTitle={this.state.modalTitle}
          publishers={this.state.publishers}
          authors={this.state.authors}
          save={() => {
            this.loadBooks();
            this.setState({ showBookPopup: false });
          }}
        />
        <AuthorPopup
          show={this.state.showAuthorPopup}
          hide={() => this.setState({ showAuthorPopup: false })}
          author={this.state.selectedAuthor}
          modalTitle={this.state.modalTitle}
          save={() => {
            this.loadAuthors();
            this.loadBooks();
            this.setState({ showAuthorPopup: false });
          }}
        />
        <PublisherPopup
          show={this.state.showPublisherPopup}
          hide={() => this.setState({ showPublisherPopup: false })}
          publisher={this.state.selectedPublisher}
          modalTitle={this.state.modalTitle}
          save={() => {
            this.loadPublishers();
            this.loadBooks();
            this.setState({ showPublisherPopup: false });
          }}
        />
      </React.Fragment>
    );
  }
}

export default Home;
