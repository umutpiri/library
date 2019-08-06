package com.forte.library.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.forte.library.model.Author;
import com.forte.library.model.Book;
import com.forte.library.model.Publisher;

public class BookDto {
    private int id;
    private Author author;
    private Publisher publisher;
    private String title;
    private String date;
    private String category;
    private double price;

    @JsonCreator
    public BookDto(@JsonProperty int id,
                   @JsonProperty Author author,
                   @JsonProperty Publisher publisher,
                   @JsonProperty String title,
                   @JsonProperty String date,
                   @JsonProperty String category,
                   @JsonProperty double price) {
        this.id = id;
        this.author = author;
        this.publisher = publisher;
        this.title = title;
        this.date = date;
        this.category = category;
        this.price = price;
    }

    public BookDto(Book book, Author author, Publisher publisher){
        this.id = book.getId();
        this.author = author;
        this.publisher = publisher;
        this.title = book.getTitle();
        this.date = book.getDate();
        this.price = book.getPrice();
        this.category=book.getCategory();
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
