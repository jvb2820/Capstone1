package com.capstone.server.controller;

import org.springframework.web.bind.annotation.RestController;

import com.capstone.server.entity.Applicant;
import com.capstone.server.service.ApplicantService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/applicants")
@RequiredArgsConstructor

public class ApplicantController {
    private final ApplicantService applicantService;

    @GetMapping
    public ResponseEntity<List<Applicant>> getApplicants() {
        return new ResponseEntity<>(applicantService.getApplicants(), HttpStatus.FOUND);
    }

    @PostMapping
    public Applicant addApplicant(@RequestBody Applicant applicant) {
        return applicantService.addApplicant(applicant);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteApplicant(@PathVariable Long id) {
        applicantService.deleteApplicant(id);
    }

    @GetMapping("/applicant/{id}")
    public Applicant getApplicantBy(@PathVariable Long id) {
        //
        return applicantService.getApplicantById(id);
    }
}
