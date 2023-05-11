package com.example.shoe_store.service;

import com.example.shoe_store.entity.OrderEntity;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {

    OrderEntity getOrderById(int orderId);

    OrderEntity getOrderByCustomerId(int customerId);

    OrderEntity createOrder(OrderEntity order);
}
