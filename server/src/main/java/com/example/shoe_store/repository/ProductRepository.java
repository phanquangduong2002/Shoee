package com.example.shoe_store.repository;

import com.example.shoe_store.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    ProductEntity findByProductId(Integer productId);

    ProductEntity save(ProductEntity product);

    List<ProductEntity> findByProductNameContainingIgnoreCase(String productName);
}
