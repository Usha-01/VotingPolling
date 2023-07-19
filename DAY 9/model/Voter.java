

package com.example.demo.model;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;




@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class  Voter {

	@Id
//	@GeneratedValue(strategy = Gene)

	private int id;
	private String Name;
	private String Email;
	private String Password;
	private String Dob;
	private String gender;
	
	

	@ManyToOne(fetch = FetchType.LAZY ,cascade=CascadeType.ALL)
	private Admin admin;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="candidate_id")
	private Candidate candidate;




}
