package com.yono.yonosbi.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "account")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long acnumber;

	@Column(name="bid")
	private Integer bid;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "custid")
	private Customer customer;

	@Column(name = "balance")
	private Integer balance;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "opendate")
	private Date accopendate;

	@Column(name = "atype")
	private String atype;

	@Column(name = "astatus")
	private String astatus;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "account")
	private LoginCred logincred;

	public long getAcnumber() {
		return acnumber;
	}

	public void setAcnumber(long acnumber) {
		this.acnumber = acnumber;
	}

//	public branch getbranchdetails() {
//		return branchdetails;
//	}

	

	public Customer getCustomer() {
		return customer;
	}

	public Integer getBid() {
		return bid;
	}

	public void setBid(Integer bid) {
		this.bid = bid;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Integer getBalance() {
		return balance;
	}

	public void setBalance(Integer balance) {
		this.balance = balance;
	}

	public Date getAccopendate() {
		return accopendate;
	}

	public void setAccopendate(Date Date) {
		this.accopendate = Date;
	}

	public String getAtype() {
		return atype;
	}

	public void setAtype(String atype) {
		this.atype = atype;
	}

	public String getAstatus() {
		return astatus;
	}

	public void setAstatus(String astatus) {
		this.astatus = astatus;
	}

//	public LoginCred getLogincredModel() {
//		return logincredModel;
//	}
//
//
//
//
//
//	public void setLogincredModel(LoginCred logincredModel) {
//		this.logincredModel = logincredModel;
//	}

	public Account(long acnumber, Integer balance, Date accopendate, String atype, String astatus) {

		this.acnumber = acnumber;
		this.balance = balance;
		this.accopendate = accopendate;
		this.atype = atype;
		this.astatus = astatus;
	}

	@Override
	public String toString() {
		return "Account [acnumber=" + acnumber + ", balance=" + balance + ", accopendate=" + accopendate + ", atype="
				+ atype + ", astatus=" + astatus + "]";
	}

	public Account() {
	}

}
