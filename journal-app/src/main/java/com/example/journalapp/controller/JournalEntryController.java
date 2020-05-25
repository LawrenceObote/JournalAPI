package com.example.journalapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.example.journalapp.model.JournalEntry;
import com.example.journalapp.repository.JournalRepository;

@RestController
@RequestMapping("/journal-app/v1")

public class JournalEntryController {

    @Autowired
    private JournalRepository journalRepository;


    //get all Journal Entries

    @GetMapping("/journal-entries")
    public List<JournalEntry> getAlljournalEntries(Model model){
        return journalRepository.findAll();
    }
    //get all JournalEntries by id

    @GetMapping("/journal-entries/{journalEntryId}")
    public ResponseEntity<JournalEntry> getJournalEntryById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        JournalEntry journalEntry = journalRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Journal Entry not found for this id ::" + id ));
        return ResponseEntity.ok().body(journalEntry);
    }
    //save journalEntry

    @PostMapping("/journal-entries")
    public JournalEntry createImage(@Valid @RequestBody JournalEntry journalEntry) {
        return journalRepository.save(journalEntry);
    }

    //Update JournalEntry

    @PutMapping("/journal-entries/{id}")
    public ResponseEntity<JournalEntry> updateJournalEntriesById(@PathVariable(value = "id") Long id, @Valid @RequestBody JournalEntry journalEntryDetails)
            throws ResourceNotFoundException {
        JournalEntry journalEntry = journalRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Journal Entry not found for this id :: " + id));

        journalEntry.setJournalEntryText(journalEntryDetails.getJournalEntryText());
        journalEntry.setJournalEntryDate(journalEntryDetails.getJournalEntryDate());



        final JournalEntry updatedJournalEntry = journalRepository.save(journalEntry);

        return ResponseEntity.ok(updatedJournalEntry);
    }

    @DeleteMapping("/journal-entries/{id}")
    public Map<String, Boolean> deletedImage(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        JournalEntry journalEntry = journalRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Journal Entry not found for this id :: " + id));


        journalRepository.delete(journalEntry);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted journal entry", Boolean.TRUE);

        return response;
    }

}
