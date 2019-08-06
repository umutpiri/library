package com.forte.library.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.forte.library.dto.BookDto;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @NotBlank
    @Column(name = "title")
    private String title;
    @Column(name = "date")
    private String date;
    @Column(name = "book_img")
    private String bookImg;
    @Column(name = "price")
    private double price;
    @Column(name = "category")
    private String category;

    public Book(@JsonProperty int id,
                @JsonProperty Publisher publisher,
                @JsonProperty Author author,
                @JsonProperty @NotBlank String title,
                @JsonProperty String date,
                @JsonProperty String bookImg,
                @JsonProperty double price,
                @JsonProperty String category) {
        this.id = id;
        this.publisher = publisher;
        this.title = title;
        this.date = date;
        this.bookImg = bookImg;
        this.price = price;
        this.category = category;
        this.author = author;
    }

    public Book() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getBookImg() {
        return bookImg;
    }

    public void setBookImg(String bookImg) {
        this.bookImg = bookImg;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", author=" + author.toString() +
                ", publisherId=" + publisher.toString() +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                ", bookImg='" + bookImg + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                '}';
    }

    public void setAll(BookDto bookDto){
        this.price = bookDto.getPrice();
        this.category = bookDto.getCategory();
        this.title = bookDto.getTitle();
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }
}
