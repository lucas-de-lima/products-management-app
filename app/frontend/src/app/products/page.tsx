'use client'

import { useEffect, useState } from 'react';
import { getProducts } from '../api/fetchApi';
import { Product } from '../interfaces/productInterface';
import { columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Product[]> {
  try {
    const response = await getProducts()

    if (!response.data) {
      throw new Error('Erro ao buscar os produtos');
    }

    return response.data as Product[];
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setData(products);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
