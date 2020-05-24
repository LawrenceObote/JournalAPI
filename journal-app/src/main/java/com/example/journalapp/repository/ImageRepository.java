package com.example.journalapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.journalapp.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
