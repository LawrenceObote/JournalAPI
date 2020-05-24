package com.example.journalapp.controller;

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
import com.example.journalapp.model.ChatComment;
import com.example.journalapp.repository.ChatRepository;

@RestController
@RequestMapping("/journal-app/v1")

public class ChatController {

    @Autowired
    private ChatRepository chatRepository;


    //get all comments

    @GetMapping("/comments")
    public List<ChatComment> getAllComments(Model model){
        return chatRepository.findAll();
    }
    //get all comments by id

    @GetMapping("/comments/{id}")
    public ResponseEntity<ChatComment> getCommentId(@PathVariable(value = "commentId") Long commentId)
            throws ResourceNotFoundException {
        ChatComment comment = chatRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment not found for this id ::" + commentId ));
        return ResponseEntity.ok().body(comment);
    }
    //save comment

    @PostMapping("/comments")
    public ChatComment createComment(@Valid @RequestBody ChatComment comment) {
        return chatRepository.save(comment);
    }

    //Update Comment

    @PutMapping("/comments/{id}")
    public ResponseEntity<ChatComment> updateComemntById(@PathVariable(value = "commentId") Long commentId, @Valid @RequestBody ChatComment commentDetails)
            throws ResourceNotFoundException {
        ChatComment comment = chatRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment not found for this id :: " + commentId));

        comment.setChatComment(commentDetails.getChatComment());
        



        final ChatComment updatedComment = chatRepository.save(comment);

        return ResponseEntity.ok(updatedComment);
    }

    @DeleteMapping("/comments/{id}")
    public Map<String, Boolean> deletedComment(@PathVariable(value = "commentId") Long commentId)
            throws ResourceNotFoundException {
        ChatComment comment = chatRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment not found for this id :: " + commentId));


        chatRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted comment", Boolean.TRUE);

        return response;
    }
}
