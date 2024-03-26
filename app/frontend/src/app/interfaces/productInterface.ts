export type Product = {
    id: number
    name: string
    description: string
    price: string
    available: boolean
}

export type ProductForm = {
    name: string
    description: string
    price: string
    available: Array<string>
}

export type ProductFormConverted = {
    name: string
    description: string
    price: string
    available: boolean
}