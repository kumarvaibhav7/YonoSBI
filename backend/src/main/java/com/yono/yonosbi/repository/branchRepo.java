package com.yono.yonosbi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yono.yonosbi.model.LoginCred;
import com.yono.yonosbi.model.branch;

@Repository
public interface branchRepo extends JpaRepository<branch, Integer>{

}