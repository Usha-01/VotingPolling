package com.neo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Candidate;
import com.neo.security.service.CandidateService;

import lombok.RequiredArgsConstructor;





@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/candidate")
public class Candidatecontroller {
	
	
	
	
	
	@Autowired
	private CandidateService service;

	@GetMapping("/get")
	public List<Candidate> getUsers(){
		return service.getCandidate();
	}
	
	@GetMapping("/get/{id}")
	public Optional<Candidate> getUserByEmail(@PathVariable int id){
		return service.getById(id);
	}
	

	@PostMapping("/save")
	public String addAdmin(@RequestBody Candidate candidate) {
        return service.addCandidate(candidate);
    }
	
//
//	@PutMapping("/user/{id}")
//	public Candidate updateById(@PathVariable int id,@RequestBody Candidate  candidate)
//	{
//		
//		return service.updateCandidateById(candidate);
//	}
//	
	@DeleteMapping("/delete/{id}")
	public String deleteCandidate(@PathVariable int id) {
		return service.deleteCandidateById(id);
	}

	

}
