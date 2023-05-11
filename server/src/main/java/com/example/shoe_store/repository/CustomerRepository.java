package com.example.shoe_store.repository;

import com.example.shoe_store.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CustomerRepository extends JpaRepository<CustomerEntity, String> {
    CustomerEntity findByUserName(String userName);

    CustomerEntity findByUserId(int userId);

    CustomerEntity save(CustomerEntity user);
}
