package com.example.shoe_store.service.impl;

import com.example.shoe_store.entity.CustomerEntity;
import com.example.shoe_store.repository.CustomerRepository;
import com.example.shoe_store.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public List<CustomerEntity> getAllCustomer() {
        return customerRepository.findAll();
    }

    @Override
    public CustomerEntity getCustomer(String userName) {
        return customerRepository.findByUserName(userName);
    }

    @Override
    public CustomerEntity getCustomerById(int userId) {
        return customerRepository.findByUserId(userId);
    }

    @Override
    public CustomerEntity createCustomer(CustomerEntity user) {
        return customerRepository.save(user);
    }
}
