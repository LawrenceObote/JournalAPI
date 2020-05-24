package com.example.journalapp.model;

import javax.persistence.*;

import javax.xml.bind.annotation.XmlID;


@Entity
@Table(name = "Images")
public class Image {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private long imageId;

    @Column(name = "imageTheme")
    private String imageTheme;

    public Image() {
        super();
    }

    public Image(long imageId, String imageTheme){
        super();
        this.imageId = imageId;
        this.imageTheme = imageTheme;

    }

    public long getId() {
        return imageId;
    }

    public void setId(long imageId){
        this.imageId = imageId;
    }

    public String getImageTheme() {
        return imageTheme;
    }

    public void setImageTheme(String imageTheme){
        this.imageTheme = imageTheme;
    }

}