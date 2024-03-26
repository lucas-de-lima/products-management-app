package com.productManagement.backend.utils

import com.productManagement.backend.dto.ProductReadDto
import com.productManagement.backend.dto.ProductWriteDto
import com.productManagement.backend.model.Product

object ProductDtoConverter {
    fun fromProduct(product: Product): ProductReadDto {
        return ProductReadDto(
            id = product.id,
            name = product.name,
            description = product.description,
            price = product.price,
            available = product.available
        )
    }

    fun toEntity(productWriteDto: ProductWriteDto): Product {
        return Product(
            name = productWriteDto.name,
            description = productWriteDto.description,
            price = productWriteDto.price,
            available = productWriteDto.available
        )
    }
}