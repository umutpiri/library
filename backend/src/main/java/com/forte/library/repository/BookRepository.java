package com.forte.library.repository;

import com.forte.library.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book,Integer> {

    List<Book> findAllByAuthorId(int authorId);

    void deleteAllByAuthorId(int authorId);
}
