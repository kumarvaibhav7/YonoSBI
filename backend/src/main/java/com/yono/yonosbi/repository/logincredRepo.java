package com.yono.yonosbi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yono.yonosbi.model.LoginCred;

@Repository
public interface logincredRepo extends JpaRepository<LoginCred, String>{
	
}
