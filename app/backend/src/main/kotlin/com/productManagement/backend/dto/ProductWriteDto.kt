package com.productManagement.backend.dto

import java.math.BigDecimal

data class ProductWriteDto(
    val name: String,
    val description: String,
    val price: BigDecimal,
    val available: Boolean
)