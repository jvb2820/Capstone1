package com.capstone.server.entity;

import org.hibernate.annotations.NaturalId;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NaturalId(mutable = true)
    private String email;

    // project/ideas details
    private String projectTitle;
    @Lob
    @Column(name = "curriculum_vitae_project_leader", columnDefinition = "BLOB")
    private byte[] curriculumVitaeProjectLeader; // file
    private String linksToAnySupportingMaterials;

    // group info
    private String groupName;
    private String teamLeader;
    private String teamsLeaderMobileNumber;
    private String teamLeaderEmailAddress;
    private String teamMember2;
    private String teamMember3;
    private String teamMember4;
    private String teamMember5;
    private String university;
    // technology and commercialization readiness level
    private String technology;
    private String productDevelopment;
    private String competitiveLandscape;
    private String productDevelopmentDesign;
    private String team;
    private String goToMarket;
    private String manufacturingSupplyChain;

    // eligibility and agreement
    private Boolean eligibilityAgreement;

    // applicant commitment verification form
    private Boolean applicantCommitmentVerification1;
    private Boolean applicantCommitmentVerification2;
    private Boolean applicantCommitmentVerification3;
    private Boolean applicantCommitmentVerification4;

    // about startup
    private String startupProjectDescription;
    // team composition
    private String teamCompositionName1;
    private String teamCompositionRole1;
    private String teamCompositionName2;
    private String teamCompositionRole2;
    private String teamCompositionName3;
    private String teamCompositionRole3;
    // about product/solution
    private String problemStatement;
    private String targetMarket;
    private String solutionDescription;
    // historical timeline product/project development
    private String historicalDate1;
    private String historicalKeyActivities1;
    private String historicalDate2;
    private String historicalKeyActivities2;
    private String historicalDate3;
    private String historicalKeyActivities3;
    private String historicalDate4;
    private String historicalKeyActivities4;
    private String historicalDate5;
    private String historicalKeyActivities5;
    // competitive advantage analysis
    private String competitiveFactors_1;
    private String nameCompetitionAlternative1_1;
    private String nameCompetitionAlternative2_1;
    private String nameCompetitionAlternative3_1;
    private String startupProjectName_1;
    private String competitiveFactors_2;
    private String nameCompetitionAlternative1_2;
    private String nameCompetitionAlternative2_2;
    private String nameCompetitionAlternative3_2;
    private String startupProjectName_2;
    // intelectual property status
    private String intellectualPropertyStatus;
    // about Proposed Acceleration
    private String objectives;
    private String scopeProposal;
    private String methodologyExpectedOutputs;

}
