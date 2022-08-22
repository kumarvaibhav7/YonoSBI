package com.yono.yonosbi.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="logincred")
public class LoginCred {
	@Id
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="acnumber")
	private Account account;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

	public long getAccount() {
		return account.getAcnumber();
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public LoginCred() {}

	public LoginCred(String username, String password) {
		
		this.username = username;
		this.password = password;
//		this.account = account;
//		System.out.println(accountModel);
	}

	@Override
	public String toString() {
		return "LoginCred [username=" + username + ", password=" + password + ", accountNumber=" + account.getAcnumber() + "]";
	}

	
	
	
	
	
	
	
	
}
