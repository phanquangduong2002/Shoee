package com.example.shoe_store.service;

import com.example.shoe_store.entity.OrderDetailEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderDetailService {
    List<OrderDetailEntity> getAllOrder();

    OrderDetailEntity createOrderDetail(OrderDetailEntity order);

    void updateOrderDetail(OrderDetailEntity orderDetail);

    public OrderDetailEntity getOrderDetailByOrderIdAndProductId(int orderId, int productId);

    public void deleteOrderDetail(OrderDetailEntity orderDetail);
}
