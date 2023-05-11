package com.example.shoe_store.service.impl;

import com.example.shoe_store.entity.ProductEntity;
import com.example.shoe_store.repository.ProductRepository;
import com.example.shoe_store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<ProductEntity> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public ProductEntity saveProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    @Override
    public ProductEntity getProductById(int productId) {
        return productRepository.findByProductId(productId);
    }

    @Override
    public List<ProductEntity> searchProducts(String productName) {
        return productRepository.findByProductNameContainingIgnoreCase(productName);
    }
}
