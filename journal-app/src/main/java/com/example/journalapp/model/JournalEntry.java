package com.example.journalapp.model;

import javax.persistence.*;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlID;
import java.util.Optional;


@Entity
@Table(name = "Journal_Entries")
public class JournalEntry {


    @Id
    @GeneratedValue
    @Column(name = "Journal_Entry_Id")
    private long id;

    @Column(name = "Entry_text")
    private String journalEntryText;

    @Column(name = "Entry_date")
    private long journalEntryDate;

    public JournalEntry() {
        super();
    }

    public JournalEntry(String chatComment, long commentDate){
        super();
        this.journalEntryText = journalEntryText;
        this.journalEntryDate = journalEntryDate;
    }

    public long getJournalEntryId() {
        return id;
    }

    public void setJournalEntryId(long id){
        this.id = id;
    }

    public String getJournalEntryText() {
        return journalEntryText;
    }

    public void setJournalEntryText(String journalEntryText){
        this.journalEntryText = journalEntryText;
    }

    public long getJournalEntryDate(){
        return journalEntryDate;
    }

    public void setJournalEntryDate(long date){
        this.journalEntryDate = journalEntryDate;
    }


}