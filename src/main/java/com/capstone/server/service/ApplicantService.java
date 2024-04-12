package com.capstone.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capstone.server.entity.Applicant;
import com.capstone.server.repository.ApplicantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ApplicantService {
    private final ApplicantRepository applicantRepository;

    public Applicant addApplicant(Applicant applicant) {
        if (applicantAlreadyExists(applicant.getEmail())) {
            throw new ApplicantAlreadyExistsException(applicant.getEmail() + " already exists!");
        }
        return applicantRepository.save(applicant);
    }

    private boolean applicantAlreadyExists(String email) {
        return applicantRepository.findByEmail(email).isPresent();
        // throw new UnsupportedOperationException("Unimplemented method
        // 'applicantAlreadyExists'");
    }

    public List<Applicant> getApplicants() {
        return applicantRepository.findAll();

    }

    public Applicant updateApplicant(Applicant applicant, Long id) {
        return null;

    }

    public Applicant getApplicantById(Long id) {

        return applicantRepository.findById(id)
                .orElseThrow(() -> new ApplicantNotFoundException("Sorry, no applicant found with the id: " + id));
    }

    public void deleteApplicant(Long id) {
        if (!applicantRepository.existsById(id)) {
            throw new ApplicantNotFoundException("Student not found");
        }
        // return null;
    }
}
