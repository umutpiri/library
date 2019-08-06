package com.forte.library.controller;

import com.forte.library.model.Author;
import com.forte.library.model.Book;
import com.forte.library.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/author")
@RestController
@CrossOrigin
public class AuhtorController {

    private MainService mainService;

    @Autowired
    public AuhtorController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("")
    public List<Author> getAll(){
        return mainService.findAllAuthors();
    }

    @GetMapping(path = "{id}")
    public List<Book> getBooksOfAuthor(@PathVariable("id") int authorId){
        return mainService.findBooksOfAuthor(authorId);
    }

    @PostMapping("")
    public int addAuthor(@RequestBody Author author){
        return mainService.addAuthor(author);
    }

    @PutMapping("/edit")
    public int editAuthor(@RequestBody Author author){
        return mainService.editAuthor(author);
    }

    @DeleteMapping("/delete/{id}")
    public int deleteById(@PathVariable("id") int authorId){
        return mainService.deleteAuthor(authorId);
    }
}
