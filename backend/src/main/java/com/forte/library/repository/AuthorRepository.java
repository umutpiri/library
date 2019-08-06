package com.forte.library.repository;

import com.forte.library.model.Author;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface AuthorRepository extends CrudRepository<Author,Integer> {
    @Query(value = "SELECT * FROM author a WHERE a.is_deleted = 0",
            nativeQuery = true)
    Collection<Author> findAllActiveAuthors();
}
