package com.productManagement.backend.model

import jakarta.persistence.*
import java.math.BigDecimal

@Entity
@Table(name = "products")
data class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    internal var id: Long? = null,

    @Column(nullable = false)
    internal var name: String,

    @Column
    internal var description: String,

    @Column
    internal var price: BigDecimal,

    @Column
    internal var available: Boolean
)
