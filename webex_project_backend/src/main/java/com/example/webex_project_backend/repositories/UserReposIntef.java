package com.example.webex_project_backend.repositories;

import com.example.webex_project_backend.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserReposIntef extends JpaRepository<Users, Long> {
    List<Users> findByEmail(String email);
    List<Users> findByPassword(String password);
}
