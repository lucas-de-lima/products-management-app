package com.productManagement.backend.controller

import com.productManagement.backend.dto.ProductReadDto
import com.productManagement.backend.dto.ProductWriteDto
import com.productManagement.backend.service.ProductServiceImp
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/products")
class ProductController(private var productService: ProductServiceImp) {

    @PostMapping
    fun createProduct(@RequestBody productDto: ProductWriteDto): ResponseEntity<ProductReadDto> {
        val newProduct = productService.createProduct(productDto)
        return ResponseEntity(newProduct, HttpStatus.CREATED)
    }

    @GetMapping
    fun getProducts(): ResponseEntity<List<ProductReadDto>> {
        val products = productService.getProducts()
        return ResponseEntity(products, HttpStatus.OK)
    }

    @GetMapping("{id}")
    fun getProductById(@PathVariable id: Long): ResponseEntity<ProductReadDto> {
        val product = productService.getProductById(id)
        return ResponseEntity(product, HttpStatus.OK)
    }

    @PutMapping("{id}")
    fun updateProduct(@PathVariable id: Long, @RequestBody productDto: ProductWriteDto): ResponseEntity<ProductReadDto> {
        val product = productService.updateProduct(id, productDto)
        return ResponseEntity(product, HttpStatus.OK)
    }

    @DeleteMapping("{id}")
    fun deleteProduct(@PathVariable id: Long): ResponseEntity<Unit> {
        productService.deleteProduct(id)
        return ResponseEntity(HttpStatus.NO_CONTENT)
    }
}
