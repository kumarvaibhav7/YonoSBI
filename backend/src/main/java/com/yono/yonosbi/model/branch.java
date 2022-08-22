package com.yono.yonosbi.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "branchdetails")
public class branch {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer bid;
	
	@Column(name="bname")
	private String bname;
	
	@Column(name="bcity")
	private String bcity;
	
	@Column(name="bcode")
	private String bcode;
	
//	@OneToOne(cascade=CascadeType.ALL , mappedBy = "branchdetails")
//	private Account account;

	

	public Integer getBid() {
		return bid;
	}



	public void setBid(Integer bid) {
		this.bid = bid;
	}



	public String getBname() {
		return bname;
	}



	public void setBname(String bname) {
		this.bname = bname;
	}



	public String getBcity() {
		return bcity;
	}



	public void setBcity(String bcity) {
		this.bcity = bcity;
	}



	public String getBcode() {
		return bcode;
	}



	public void setBcode(String bcode) {
		this.bcode = bcode;
	}



//	public Account getAccountModel() {
//		return accountModel;
//	}
//
//
//
//	public void setAccountModel(Account accountModel) {
//		this.accountModel = accountModel;
//	}

	

	@Override
	public String toString() {
		return "branch [bid=" + bid + ", bname=" + bname + ", bcity=" + bcity + ", bcode=" + bcode + "]";
	}

	public branch() {}

	public branch(Integer bid, String bname, String bcity, String bcode) {
		super();
		this.bid = bid;
		this.bname = bname;
		this.bcity = bcity;
		this.bcode = bcode;
	}



	

	
	
	
}
