package com.example.journalapp.model;

import javax.persistence.*;

import java.sql.Time;
import java.sql.Date;
import java.sql.Timestamp;


@Entity
@Table(name = "ChatComments")
public class ChatComment {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private long commentId;

    @Column(name = "chat_text")
    private String chatComment;

    @Column(name = "comment_date")
    private Timestamp commentDate;

    public ChatComment() {
        super();
    }

    public ChatComment(String chatComment, Timestamp commentDate){
        super();
        this.commentId = commentId;
        this.chatComment = chatComment;
        this.commentDate = commentDate;
    }

    public long getId() {
        return commentId;
    }

    public void setId(long commentId){
        this.commentId = commentId;
    }

    public String getChatComment() {
        return chatComment;
    }

    public void setChatComment(String chatComment){
        this.chatComment = chatComment;
    }

    public Timestamp getCommentDate(){
        return commentDate;
    }

    public void setCommentDate(Timestamp commentDate){
        this.commentDate = getCurrentTimeStamp();

    }
    private static java.sql.Timestamp getCurrentTimeStamp(){
        java.util.Date today = new java.util.Date();
        return new java.sql.Timestamp(today.getTime());
    }
}