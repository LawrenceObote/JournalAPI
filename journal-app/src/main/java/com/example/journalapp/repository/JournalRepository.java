package com.example.journalapp.repository;

import com.example.journalapp.model.JournalEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface JournalRepository extends JpaRepository<JournalEntry, Long> {

}
