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
        return applicantRepository.findById(id).map(ap -> {
            ap.setEmail(applicant.getEmail());
            ap.setProjectTitle(applicant.getProjectTitle());
            ap.setStartupProjectDescription(applicant.getStartupProjectDescription());
            ap.setTeamCompositionName1(applicant.getTeamCompositionName1());
            ap.setTeamCompositionName2(applicant.getTeamCompositionName2());
            ap.setTeamCompositionName3(applicant.getTeamCompositionName3());
            ap.setTeamCompositionRole1(applicant.getTeamCompositionRole1());
            ap.setTeamCompositionRole2(applicant.getTeamCompositionRole2());
            ap.setTeamCompositionRole3(applicant.getTeamCompositionRole3());
            ap.setProblemStatement(applicant.getProblemStatement());
            ap.setTargetMarket(applicant.getTargetMarket());
            ap.setSolutionDescription(applicant.getSolutionDescription());
            ap.setHistoricalDate1(applicant.getHistoricalDate1());
            ap.setHistoricalDate2(applicant.getHistoricalDate2());
            ap.setHistoricalDate3(applicant.getHistoricalDate3());
            ap.setHistoricalDate4(applicant.getHistoricalDate4());
            ap.setHistoricalDate5(applicant.getHistoricalDate5());
            ap.setHistoricalKeyActivities1(applicant.getHistoricalKeyActivities1());
            ap.setHistoricalKeyActivities2(applicant.getHistoricalKeyActivities2());
            ap.setHistoricalKeyActivities3(applicant.getHistoricalKeyActivities3());
            ap.setHistoricalKeyActivities4(applicant.getHistoricalKeyActivities4());
            ap.setHistoricalKeyActivities5(applicant.getHistoricalKeyActivities5());
            ap.setCompetitiveFactors_1(applicant.getCompetitiveFactors_1());
            ap.setCompetitiveFactors_2(applicant.getCompetitiveFactors_2());
            ap.setStartupProjectName_1(applicant.getStartupProjectName_1());
            ap.setStartupProjectName_2(applicant.getStartupProjectName_2());
            ap.setNameCompetitionAlternative1_1(applicant.getNameCompetitionAlternative1_1());
            ap.setNameCompetitionAlternative2_1(applicant.getNameCompetitionAlternative2_1());
            ap.setNameCompetitionAlternative3_1(applicant.getNameCompetitionAlternative3_1());
            ap.setNameCompetitionAlternative1_2(applicant.getNameCompetitionAlternative1_2());
            ap.setNameCompetitionAlternative2_2(applicant.getNameCompetitionAlternative2_2());
            ap.setNameCompetitionAlternative3_2(applicant.getNameCompetitionAlternative3_2());
            ap.setIntellectualPropertyStatus(applicant.getIntellectualPropertyStatus());
            ap.setObjectives(applicant.getObjectives());
            ap.setScopeProposal(applicant.getScopeProposal());
            ap.setMethodologyExpectedOutputs(applicant.getMethodologyExpectedOutputs());
            ap.setCurriculumVitaeProjectLeader(applicant.getCurriculumVitaeProjectLeader());
            ap.setLinksToAnySupportingMaterials(applicant.getLinksToAnySupportingMaterials());
            ap.setGroupName(applicant.getGroupName());
            ap.setTeamLeader(applicant.getTeamLeader());
            ap.setTeamsLeaderMobileNumber(applicant.getTeamsLeaderMobileNumber());
            ap.setTeamLeaderEmailAddress(applicant.getTeamLeaderEmailAddress());
            ap.setTeamMember2(applicant.getTeamMember2());
            ap.setTeamMember3(applicant.getTeamMember3());
            ap.setTeamMember4(applicant.getTeamMember4());
            ap.setTeamMember5(applicant.getTeamMember5());
            ap.setUniversity(applicant.getUniversity());
            ap.setTechnology(applicant.getTechnology());
            ap.setProductDevelopment(applicant.getProductDevelopment());
            ap.setCompetitiveLandscape(applicant.getCompetitiveLandscape());
            ap.setProductDevelopmentDesign(applicant.getProductDevelopmentDesign());
            ap.setTeam(applicant.getTeam());
            ap.setGoToMarket(applicant.getGoToMarket());
            ap.setManufacturingSupplyChain(applicant.getManufacturingSupplyChain());
            ap.setEligibilityAgreement(applicant.getEligibilityAgreement());
            ap.setApplicantCommitmentVerification1(applicant.getApplicantCommitmentVerification1());
            ap.setApplicantCommitmentVerification2(applicant.getApplicantCommitmentVerification2());
            ap.setApplicantCommitmentVerification3(applicant.getApplicantCommitmentVerification3());
            ap.setApplicantCommitmentVerification4(applicant.getApplicantCommitmentVerification4());

            return applicantRepository.save(ap);
        }).orElseThrow(() -> new ApplicantNotFoundException("Sorry, this applicant does not exist."));

    }

    public Applicant getApplicantById(Long id) {

        return applicantRepository.findById(id)
                .orElseThrow(() -> new ApplicantNotFoundException("Sorry, no applicant found with the id: " + id));
    }

    public void deleteApplicant(Long id) {
        if (!applicantRepository.existsById(id)) {
            throw new ApplicantNotFoundException("Student not found");
        }
        applicantRepository.deleteById(id);
    }
}
