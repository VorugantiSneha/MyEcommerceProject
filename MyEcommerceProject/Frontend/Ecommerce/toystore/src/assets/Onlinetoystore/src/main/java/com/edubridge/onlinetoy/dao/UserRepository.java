package com.edubridge.onlinetoy.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edubridge.onlinetoy.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUserName(String username);
}
