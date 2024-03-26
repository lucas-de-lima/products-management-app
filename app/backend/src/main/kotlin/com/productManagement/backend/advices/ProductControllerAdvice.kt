package com.productManagement.backend.advices

import com.productManagement.backend.exeptions.*
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ProductControllerAdvice {
    @ExceptionHandler(ProductNotFoundException::class)
    fun handleProductNotFoundException(e: ProductNotFoundException): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.message)
    }

    @ExceptionHandler(ProductCreationException::class)
    fun handleProductCreationException(e: ProductCreationException): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.message)
    }

    @ExceptionHandler(ProductUpdateException::class)
    fun handleProductUpdateException(e: ProductUpdateException): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.message)
    }

    @ExceptionHandler(ProductDeletionException::class)
    fun handleProductDeletionException(e: ProductDeletionException): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.message)
    }

    @ExceptionHandler(EmptyProductListException::class)
    fun handleEmptyProductListException(e: EmptyProductListException): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.message)
    }
}
