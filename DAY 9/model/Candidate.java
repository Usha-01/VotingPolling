package com.example.demo.model;




import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Candidate {

	@Id
//	@GeneratedValue(strategy = Gene)
	private int id;
	private String Name;
	private String Email;
	private String Password;
	private String Dob;
	private String gender;
	private String department;
	private String position;
	private String symbol;
	private Long mobno;
	
	

	@ManyToOne(fetch =FetchType.LAZY ,cascade=CascadeType.ALL)
	private Admin admin;
	
	@OneToOne(mappedBy="candidate")
	private Voter voter;


}

