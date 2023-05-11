package com.example.shoe_store.service.impl;

import com.example.shoe_store.entity.OrderEntity;
import com.example.shoe_store.repository.OrderRepository;
import com.example.shoe_store.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Override
    public OrderEntity getOrderById(int orderId) {
        return orderRepository.findByOrderId(orderId);
    }

    @Override
    public OrderEntity getOrderByCustomerId(int customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    @Override
    public OrderEntity createOrder(OrderEntity order) {
        return orderRepository.save(order);
    }
}