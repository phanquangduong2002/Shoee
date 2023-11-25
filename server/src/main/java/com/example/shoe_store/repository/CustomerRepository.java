package com.example.shoe_store.repository;

import com.example.shoe_store.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    CustomerEntity findByUserName(String userName);

    CustomerEntity findByUserId(int userId);

    CustomerEntity save(CustomerEntity user);
}
