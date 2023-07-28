package com.neo.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


@Entity

public class Candidate {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = true,unique = true,length = 50)
	
//	private String email;
//	@Column(nullable = false,length = 64)
	

	private String firstName;
	private String lastName;
	private String partyName;
	private String position;
	private int registerNumber;

	

}
