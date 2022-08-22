package com.yono.yonosbi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yono.yonosbi.model.Customer;

@Repository
public interface customerRepo extends JpaRepository<Customer, Integer> {

}
