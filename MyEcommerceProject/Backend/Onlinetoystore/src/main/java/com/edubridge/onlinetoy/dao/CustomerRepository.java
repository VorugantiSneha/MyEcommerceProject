package com.edubridge.onlinetoy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.edubridge.onlinetoy.entity.Customer;


@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByEmail(String theEmail);
}