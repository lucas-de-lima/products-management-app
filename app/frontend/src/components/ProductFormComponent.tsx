'use client'

import HttpClient from '@/app/api/HttpClient';
import { postProduct } from '@/app/api/fetchApi';
import { ProductForm, ProductFormConverted } from '@/app/interfaces/productInterface';
import { ProductSchema, productSchema } from '@/lib/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const ProductFormComponent: React.FC = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  });

  const [isActionCompleted, setIsActionCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState<string>('');

  const convertFormData = (data: ProductForm): ProductFormConverted => {
    const {available, description, name, price} = data
    const isAvailable = available.includes('yes');
    const newObject = {
      name,
      description,
      price,
      available: isAvailable
    }
    return newObject
  }

  
  const onSubmit = async () => {
    const formData = getValues()
    const httpClient = new HttpClient('http://localhost:3001')
    try {
      if (formData) {
        const data = convertFormData(formData);
        await httpClient.post('/api/products', data);
        console.info('POST request successful');
        setIsActionCompleted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelection = (value: string) => {
    setAvailable(value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Produto</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome do produto
          </label>
          <input
            id="name"
            {...register('name')}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-gray-500 sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
            placeholder="Digite o nome do produto"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Descrição do produto
          </label>
          <input
            id="description"
            {...register('description')}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-gray-500 sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
            placeholder="Digite a descrição do produto"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Valor do produto
          </label>
          <input
            id="price"
            {...register('price')}
            type="number"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-gray-500 sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
            placeholder="Digite o valor do produto"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>
        <div className="flex items-center">
          <label htmlFor="available" className="block text-sm font-medium text-gray-700 mr-2">
            Está disponível?
          </label>
          <input
            id="available"
            type="radio"
            value="yes"
            checked={available === 'yes'}
            {...register('available')}
            onChange={() => handleSelection('yes')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="available" className="block text-sm text-gray-900 mr-2 ml-1">
            Sim
          </label>
          <input
            id="notAvailable"
            type="radio"
            value="no"
            checked={available === 'no'}
            {...register('available')}
            onChange={() => handleSelection('no')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="notAvailable" className="block text-sm text-gray-900 ml-1">
            Não
          </label>
        </div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="flex justify-end">
            <Link href='/products' onClick={(e) => !isActionCompleted && e.preventDefault()}>
                <button
                  type="button"
                  onClick={() => {
                    onSubmit();
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cadastrar
                </button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProductFormComponent;
