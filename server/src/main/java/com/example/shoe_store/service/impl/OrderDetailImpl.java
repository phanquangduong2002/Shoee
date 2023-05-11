package com.example.shoe_store.service.impl;

import com.example.shoe_store.entity.OrderDetailEntity;
import com.example.shoe_store.repository.OrderDetailRepository;
import com.example.shoe_store.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailImpl implements OrderDetailService {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetailEntity> getAllOrder() {
        return orderDetailRepository.findAll();
    }

    @Override
    public OrderDetailEntity createOrderDetail(OrderDetailEntity orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public void updateOrderDetail(OrderDetailEntity orderDetail) {
        OrderDetailEntity existingOrderDetail = orderDetailRepository.findById(orderDetail.getDetailId())
                .orElse(null);
        if (existingOrderDetail != null) {
            existingOrderDetail.setQuantityOrder(orderDetail.getQuantityOrder());
            existingOrderDetail.setTotal(orderDetail.getTotal());
            orderDetailRepository.save(existingOrderDetail);
        }
    }

    @Override
    public OrderDetailEntity getOrderDetailByOrderIdAndProductId(int orderId, int productId) {
        return orderDetailRepository.findByOrderIdAndProductId(orderId, productId);
    }

    @Override
    public void deleteOrderDetail(OrderDetailEntity orderDetail) {
        orderDetailRepository.delete(orderDetail);
    }
}
