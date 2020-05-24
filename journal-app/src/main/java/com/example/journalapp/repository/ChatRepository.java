package com.example.journalapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.journalapp.model.ChatComment;

@Repository

public interface ChatRepository extends JpaRepository<ChatComment, Long> {

}