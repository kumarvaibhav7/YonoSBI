package com.yono.yonosbi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "creditapply")
public class creditapply {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "acnumber")
	private Integer acnumber;
	
	@Column(name = "requesttype")
	private String requesttype;
	
	@Column(name ="panno")
	private String panno;
	
	@Column(name = "monthlyincome")
	private Integer monthlyincome;
	
	@Column(name = "employer")
	private String employer;
	
	@Column(name = "approval")
	private String approval;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAcnumber() {
		return acnumber;
	}

	public void setAcnumber(Integer acnumber) {
		this.acnumber = acnumber;
	}

	public String getRequesttype() {
		return requesttype;
	}

	public void setRequesttype(String requesttype) {
		this.requesttype = requesttype;
	}

	public String getPanno() {
		return panno;
	}

	public void setPanno(String panno) {
		this.panno = panno;
	}

	public Integer getMonthlyincome() {
		return monthlyincome;
	}

	public void setMonthlyincome(Integer monthlyincome) {
		this.monthlyincome = monthlyincome;
	}

	public String getEmployer() {
		return employer;
	}

	public void setEmployer(String employer) {
		this.employer = employer;
	}

	
	
	public creditapply(Integer id, Integer acnumber, String requesttype, String panno, Integer monthlyincome,
			String employer, String approval) {
		super();
		this.id = id;
		this.acnumber = acnumber;
		this.requesttype = requesttype;
		this.panno = panno;
		this.monthlyincome = monthlyincome;
		this.employer = employer;
		this.approval = approval;
	}

	public creditapply() {
		
	}

	

	@Override
	public String toString() {
		return "creditapply [id=" + id + ", acnumber=" + acnumber + ", requesttype=" + requesttype + ", panno=" + panno
				+ ", monthlyincome=" + monthlyincome + ", employer=" + employer + ", approval=" + approval + "]";
	}

	public String getApproval() {
		return approval;
	}

	public void setApproval(String approval) {
		this.approval = approval;
	}
	
	
	
	
}