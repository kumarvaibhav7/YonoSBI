package com.yono.yonosbi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.yono.yonosbi.model.creditapply;

public interface creditapplyRepo extends JpaRepository<creditapply, Integer> {

	@Query("select count(acnumber) from creditapply where acnumber=?1")
	public Integer getCountacnum(Integer acnum);
	
	@Query("select c from creditapply c where c.acnumber=?1")
	public Optional<creditapply> getDeatils(Integer acnum);
	
}
