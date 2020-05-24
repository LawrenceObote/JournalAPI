package com.example.journalapp.controller;

import java.util.HashMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.example.journalapp.exception.ResourceNotFoundException;
import com.example.journalapp.model.Image;
import com.example.journalapp.repository.ImageRepository;

@RestController
@RequestMapping("/journal-app/v1")

public class ImageController {

    @Autowired
    private ImageRepository imageRepository;


    //get all images

    @GetMapping("/journal-app")
    public List<Image> getAllImages(Model model){
        return imageRepository.findAll();
    }
    //get all images by id

    @GetMapping("/journal-app/{id}")
    public ResponseEntity<Image> getImageById(@PathVariable(value = "imageId") Long imageId)
            throws ResourceNotFoundException {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(()-> new ResourceNotFoundException("Image not found for this id ::" + imageId ));
        return ResponseEntity.ok().body(image);
    }
    //save image

    @PostMapping("/images")
    public Image createImage(@Valid @RequestBody Image image) {
        return imageRepository.save(image);
    }

    //Update Image

    @PutMapping("/images/{id}")
    public ResponseEntity<Image> updateImageById(@PathVariable(value = "id") Long imageId, @Valid @RequestBody Image imageDetails)
            throws ResourceNotFoundException {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(()-> new ResourceNotFoundException("Image not found for this id :: " + imageId));

        image.setImageTheme(imageDetails.getImageTheme());



        final Image updatedImage = imageRepository.save(image);

        return ResponseEntity.ok(updatedImage);
    }

    @DeleteMapping("/images/{id}")
    public Map<String, Boolean> deletedImage(@PathVariable(value = "imageId") Long imageId)
            throws ResourceNotFoundException {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(()-> new ResourceNotFoundException("Image not found for this id :: " + imageId));


        imageRepository.delete(image);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted employee", Boolean.TRUE);

        return response;
    }
}