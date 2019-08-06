package com.forte.library.controller;

import com.forte.library.model.Publisher;
import com.forte.library.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publisher")
@CrossOrigin
public class PublisherController {
    private MainService mainService;

    @Autowired
    public PublisherController(MainService mainService) {
        this.mainService = mainService;
    }

    @GetMapping
    public List<Publisher> getAll(){
        return mainService.findAllPublishers();
    }

    @PostMapping("")
    public int addPublisher(@RequestBody Publisher publisher){
        return mainService.addPublisher(publisher);
    }

    @PutMapping("/edit")
    public int editPublisher(@RequestBody Publisher publisher){
        return mainService.editPublisher(publisher);
    }

    @DeleteMapping("/delete/{id}")
    public int deletePublisher(@PathVariable("id") int id){
        return mainService.deletePublisher(id);
    }
}
