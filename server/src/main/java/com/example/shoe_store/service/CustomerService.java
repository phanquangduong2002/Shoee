package com.example.shoe_store.service;

import com.example.shoe_store.entity.CustomerEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {
    List<CustomerEntity> getAllCustomer();

    CustomerEntity getCustomer(String userName);

    CustomerEntity getCustomerById(int userId);

    CustomerEntity createCustomer(CustomerEntity user);
}
