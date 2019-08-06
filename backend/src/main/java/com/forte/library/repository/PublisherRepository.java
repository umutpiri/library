package com.forte.library.repository;

import com.forte.library.model.Publisher;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface PublisherRepository extends CrudRepository<Publisher,Integer> {

    @Query(value = "SELECT * FROM publisher p WHERE p.is_deleted = 0",
            nativeQuery = true)
    Collection<Publisher> findAllActivePublishers();
}
