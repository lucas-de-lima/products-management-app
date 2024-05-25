package com.productManagement.backend.service

import com.productManagement.backend.domain.ProductService
import com.productManagement.backend.dto.ProductReadDto
import com.productManagement.backend.dto.ProductWriteDto
import com.productManagement.backend.exeptions.*
import com.productManagement.backend.repository.ProductRepository
import com.productManagement.backend.utils.ProductDtoConverter
import org.springframework.stereotype.Service

@Service
class ProductServiceImp(
    private val productRepository: ProductRepository
) : ProductService {
    override fun createProduct(productDto: ProductWriteDto): ProductReadDto {
        try {
            val newProduct = ProductDtoConverter.toEntity(productDto)
            val saveProduct = productRepository.save(newProduct)
            return ProductDtoConverter.fromProduct(saveProduct)
        } catch (e: Exception) {
            throw ProductCreationException("Erro ao criar o produto: ${e.message}")
        }
    }

    override fun getProducts(): List<ProductReadDto> {
        val products = productRepository.findAll()
        if (products.isEmpty()) throw EmptyProductListException("A lista de produtos está vazia!")
        return products.map(ProductDtoConverter::fromProduct)
    }

    override fun getProductById(id: Long): ProductReadDto {
        val product = productRepository.findById(id)
            .orElseThrow { ProductNotFoundException("Produto não encontrado com o id: $id") }
        return ProductDtoConverter.fromProduct(product)
    }

    override fun updateProduct(id: Long, productDto: ProductWriteDto): ProductReadDto {
        val existingProduct = productRepository.findById(id)
            .orElseThrow { ProductUpdateException("Produto não encontrado com o id: $id") }

        existingProduct.apply {
            name = productDto.name
            description = productDto.description
            price = productDto.price
            available = productDto.available
        }

        val savedProduct = productRepository.save(existingProduct)
        return ProductDtoConverter.fromProduct(savedProduct)
    }

    override fun deleteProduct(id: Long) {
        val product = productRepository.findById(id)
            .orElseThrow { ProductDeletionException("Produto não encontrado com o id: $id") }
        productRepository.delete(product)
    }
}
