package com.example.shoe_store.repository;

import com.example.shoe_store.entity.OrderDetailEntity;
import com.example.shoe_store.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event.ID;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    OrderEntity findByOrderId(Integer orderId);

    OrderEntity findByCustomerId(Integer customerId);

    OrderEntity save(OrderEntity order);
}
