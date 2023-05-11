package com.example.shoe_store.repository;

import com.example.shoe_store.entity.OrderDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetailEntity, Integer> {

    OrderDetailEntity save(OrderDetailEntity orderDetail);

    OrderDetailEntity findByOrderIdAndProductId(int orderId, int productId);
}
