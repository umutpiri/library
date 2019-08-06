package com.forte.library.service;

import com.forte.library.repository.AuthorRepository;
import com.forte.library.repository.BookRepository;
import com.forte.library.repository.PublisherRepository;
import com.forte.library.model.Author;
import com.forte.library.model.Book;
import com.forte.library.model.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class MainService {
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private PublisherRepository publisherRepository;
    @Autowired
    private BookRepository bookRepository;

    //BOOK SERVICE
    public List<Book> findAllBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    public List<Book> findBooksOfAuthor(int authorId) {
        return (List<Book>) bookRepository.findAllByAuthorId(authorId);
    }

    public int addBook(Book book) {
        bookRepository.save(book);
        return 1;
    }

    public int editBook(Book book) {
        bookRepository.save(book);
        return 1;
    }

    public int deleteBook(int id) {
        bookRepository.deleteById(id);
        return 1;
    }

    //AUTHOR SERVICE
    public List<Author> findAllAuthors() {
        return (List<Author>) authorRepository.findAllActiveAuthors();
    }

    public int addAuthor(Author author) {
        authorRepository.save(author);
        return 1;
    }

    public int editAuthor(Author author){
        authorRepository.save(author);
        return 1;
    }

    public int deleteAuthor(int id) {
        Optional<Author> authorMaybe = authorRepository.findById(id);
        if (!authorMaybe.isPresent())
            return -1;
        Author author = authorMaybe.get();
        author.setIsDeleted(1);
        authorRepository.save(author);
        return 1;
    }

    //PUBLISHER SERVICE
    public List<Publisher> findAllPublishers() {
        return (List<Publisher>) publisherRepository.findAllActivePublishers();
    }

    public int addPublisher(Publisher publisher){
        publisherRepository.save(publisher);
        return 1;
    }

    public int editPublisher(Publisher publisher){
        publisherRepository.save(publisher);
        return 1;
    }

    public int deletePublisher(int id) {
        Optional<Publisher> publisherMaybe = publisherRepository.findById(id);
        if (!publisherMaybe.isPresent())
            return -1;
        Publisher publisher = publisherMaybe.get();
        publisher.setIsDeleted(1);
        publisherRepository.save(publisher);
        return 1;
    }

}
