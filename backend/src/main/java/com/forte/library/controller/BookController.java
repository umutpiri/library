package com.forte.library.controller;

import com.forte.library.model.Book;
import com.forte.library.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/book")
@RestController
@CrossOrigin
public class BookController {
    private MainService mainService;

    @Autowired
    public BookController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping("")
    public List<Book> getAll(){
        return mainService.findAllBooks();
    }

    @GetMapping("/author/{id}")
    public List<Book> getBooksOfAuthor(@PathVariable("id") int id){
        return mainService.findBooksOfAuthor(id);
    }

    @PostMapping("")
    public int postBook(@RequestBody Book book){
        System.out.println(book.toString());
        return mainService.addBook(book);
    }

    @PutMapping("/edit")
    public int editBook(@RequestBody Book book){
        return mainService.editBook(book);
    }

    @DeleteMapping("/delete/{id}")
    public int deleteBook(@PathVariable("id") int id){
        return mainService.deleteBook(id);
    }


    /*@PutMapping(path = "{id}")
    public void updateBook(@PathVariable("id")int id,@Valid @NonNull @RequestBody Book book){
        bookService.updateBook(id,book);
    }*/
}
