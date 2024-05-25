import ProductFormComponent from '@/components/ProductFormComponent';
import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <ProductFormComponent />
    </div>
  );
};

export default ProductsPage;
