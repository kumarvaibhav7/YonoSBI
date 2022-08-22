package com.yono.yonosbi.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trandetails")
public class trandetails {
	@Id
	@Column(name="tnumber")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tnumber;
	
	@Column(name="tranid")
	private String tranid;
	
	@Column(name="acnumber")
	private long acnumber;
	
	@Column(name="dateoftran")
	private Date dateoftran;
	
	@Column(name="medium_of_tran")
	private String medium_of_tran;
	
	@Column(name="tran_amount")
	private int tran_amount;
	
	@Column(name="from_to")
	private long from_to;

	public long getTnumber() {
		return tnumber;
	}

	public void setTnumber(long tnumber) {
		this.tnumber = tnumber;
	}

	public String getTranid() {
		return tranid;
	}

	public void setTranid(String tranid) {
		this.tranid = tranid;
	}

	public long getAcnumber() {
		return acnumber;
	}

	public void setAcnumber(long acnumber) {
		this.acnumber = acnumber;
	}

	public Date getDateoftran() {
		return dateoftran;
	}

	public void setDateoftran(Date dateoftran) {
		this.dateoftran = dateoftran;
	}

	public String getMedium_of_tran() {
		return medium_of_tran;
	}

	public void setMedium_of_tran(String medium_of_tran) {
		this.medium_of_tran = medium_of_tran;
	}

	public int getTran_amount() {
		return tran_amount;
	}

	public void setTran_amount(int tran_amount) {
		this.tran_amount = tran_amount;
	}

	public long getFrom_to() {
		return from_to;
	}

	public void setFrom_to(long from_to) {
		this.from_to = from_to;
	}

	@Override
	public String toString() {
		return "trandetails [tnumber=" + tnumber + ", tran_id=" + tranid + ", acnumber=" + acnumber + ", dateoftran="
				+ dateoftran + ", medium_of_tran=" + medium_of_tran + ", tran_amount=" + tran_amount + ", from_to="
				+ from_to + "]";
	}
	
	public trandetails() {}

	public trandetails(long tnumber, String tranid, long acnumber, Date dateoftran, String medium_of_tran,
			int tran_amount, long from_to) {
		super();
		this.tnumber = tnumber;
		this.tranid = tranid;
		this.acnumber = acnumber;
		this.dateoftran = dateoftran;
		this.medium_of_tran = medium_of_tran;
		this.tran_amount = tran_amount;
		this.from_to = from_to;
	}
	
}
