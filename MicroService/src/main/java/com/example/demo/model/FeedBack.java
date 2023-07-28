package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="FeedBack")
public class FeedBack {
	@Id
	@Column(name="feed_id")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long feed_id;
	@Column(name="EMAIL")
	private String email;
	@Column (name="NAME")
	private String Name;
	@Column(name="EXPERIENCE")
	private String experience;
	@Column(name="COMMENTS")
	private String comments;
	public long getStud_id() {
		return feed_id;
	}
	public void setStud_id(long feed_id) {
		this.feed_id = feed_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return Name;
	}
	public void setName(String Name) {
		this.Name = Name;
	}
	public String getExperience() {
		return experience;
	}
	
	public void setExperience(String Experience) {
		this.experience = Experience;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String Comments) {
		this.comments = Comments;
	}
	public FeedBack(long feed_id, String email, String Name, String Subject, String Message, String experience, String comments) {
		super();
		this.feed_id = feed_id;
		this.email = email;
		this.Name = Name;
		this.experience = experience;
		this.comments= comments;
	}
	public FeedBack() {
		
	}

}
