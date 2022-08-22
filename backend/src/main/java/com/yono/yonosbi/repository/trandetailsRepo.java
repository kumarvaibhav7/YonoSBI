package com.yono.yonosbi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yono.yonosbi.model.trandetails;

@Repository
public interface trandetailsRepo extends JpaRepository<trandetails, Long>{
	@Query("from trandetails where acnumber=?1")
	List<trandetails> getTranDetails(Long id) ;

}
