package com.example.shoe_store.service;

import com.example.shoe_store.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    List<ProductEntity> getAllProduct();

    ProductEntity getProductById(int productId);

    ProductEntity saveProduct(ProductEntity product);

    public List<ProductEntity> searchProducts(String productName);
}
