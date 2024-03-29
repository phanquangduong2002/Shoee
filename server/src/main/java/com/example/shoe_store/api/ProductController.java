package com.example.shoe_store.api;

import com.example.shoe_store.entity.OrderDetailEntity;
import com.example.shoe_store.entity.CustomerEntity;
import com.example.shoe_store.entity.ProductEntity;
import com.example.shoe_store.entity.OrderEntity;
import com.example.shoe_store.service.OrderDetailService;
import com.example.shoe_store.service.ProductService;
import com.example.shoe_store.service.OrderService;
import com.example.shoe_store.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    CustomerService customerService;

    @GetMapping
    public ResponseEntity<?> getAllProduct() {
        List<ProductEntity> productEntities = productService.getAllProduct();
        return ResponseEntity.ok().body(productEntities);
    }

    @PostMapping

    public ResponseEntity<?> createProduct(@RequestBody Map<String, Object> requestBody) {
        int userId = (int) requestBody.get("userId");

        CustomerEntity storedUser = customerService.getCustomerById(userId);

        if (!storedUser.getIsAdmin()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Only admin can add product");
        }

        Map<String, Object> productMap = (Map<String, Object>) requestBody.get("product");
        String productName = (String) productMap.get("productName");
        String productImage = (String) productMap.get("productImage");
        int productPrice = (int) productMap.get("productPrice");

        ProductEntity product = new ProductEntity();
        product.setProductName(productName);
        product.setProductImage(productImage);
        product.setProductPrice(productPrice);

        productService.saveProduct(product);

        return ResponseEntity.ok().body("Product added successfully");
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable int productId) {
        ProductEntity product = productService.getProductById(productId);

        return ResponseEntity.ok().body(product);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchProducts(@RequestParam String keyword) {

        String productName = keyword;
        List<ProductEntity> products = productService.searchProducts(productName);
        return ResponseEntity.ok(products);
    }
}
