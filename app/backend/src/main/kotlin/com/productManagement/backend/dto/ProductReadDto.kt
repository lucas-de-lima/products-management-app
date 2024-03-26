package com.productManagement.backend.dto

import java.math.BigDecimal

data class ProductReadDto(
    val id: Long?,
    val name: String,
    val description: String,
    val price: BigDecimal,
    val available: Boolean
)
