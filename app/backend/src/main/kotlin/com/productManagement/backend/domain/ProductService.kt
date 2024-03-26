package com.productManagement.backend.domain

import com.productManagement.backend.dto.ProductReadDto
import com.productManagement.backend.dto.ProductWriteDto

interface ProductService {
    fun createProduct(productDto: ProductWriteDto): ProductReadDto
    fun getProducts(): List<ProductReadDto>
    fun getProductById(id: Long): ProductReadDto
    fun updateProduct(id: Long, productDto: ProductWriteDto): ProductReadDto
    fun deleteProduct(id: Long)
}
