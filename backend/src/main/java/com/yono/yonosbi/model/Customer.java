package com.yono.yonosbi.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer custid;
	
	@Column(name = "fname")
	private String fname;
	
	@Column(name = "lname")
	private String lname;
	
	@Column(name = "houseno")
	private String houseno;
	
	@Column(name = "locality")
	private	String locality;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "country")
	private String country;
	
	@Column(name = "pincode")
	private Integer pincode;
	
	@Column(name = "mobileno")
	private String mobileno;
	
	@Column(name = "aadhaar")
	private String aadhaar;
	
	@Column(name = "mstatus")
	private String mstatus;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "dateofbirth")
	private Date dateofbirth;
	
	@OneToOne(cascade = CascadeType.ALL , mappedBy = "customer")
	private Account account;

	

	public Integer getCustid() {
		return custid;
	}

	public void setCustid(Integer custid) {
		this.custid = custid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getHouseno() {
		return houseno;
	}

	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getAadhaar() {
		return aadhaar;
	}

	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}

	public String getMstatus() {
		return mstatus;
	}

	public void setMstatus(String mstatus) {
		this.mstatus = mstatus;
	}

	public Date getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(Date dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

//	public Account getAccountModel() {
//		return accountModel;
//	}
//
//	public void setAccountModel(Account accountModel) {
//		this.accountModel = accountModel;
//	}

	
	
	
	
	public Customer(Integer custid, String fname, String lname, String houseno, String locality, String city,
			String state, String country, Integer pincode, String mobileno, String aadhaar, String pancard,
			Date dateofbirth, String mstatus) {
		super();
		this.custid = custid;
		this.fname = fname;
		this.lname = lname;
		this.houseno = houseno;
		this.locality = locality;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
		this.mobileno = mobileno;
		this.aadhaar = aadhaar;
		this.dateofbirth = dateofbirth;
		this.mstatus=mstatus;
	}

	@Override
	public String toString() {
		return "Customer [custid=" + custid + ", fname=" + fname + ", lname=" + lname + ", houseno=" + houseno
				+ ", locality=" + locality + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", pincode=" + pincode + ", mobileno=" + mobileno + ", aadhar=" + aadhaar + ", mstatus=" + mstatus
				+ ", dateofbirth=" + dateofbirth + "]";
	}

	public Customer() {}
	
	
}
