package com.yono.yonosbi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yono.yonosbi.model.Account;

@Repository
public interface accountRepo extends JpaRepository<Account, Long> {

	@Query("select c.fname , c.lname from Account a inner join a.customer c where a.acnumber =?1")
	List<String> findActiveUser(Long id);
	
//	@Query("from Account a inner join a.customer c where a.acnumber=?1")
//	List<Object> getuserdetails(Long id);
}
