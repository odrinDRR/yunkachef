import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Helado de Chocolate Belga',
    description: 'Delicioso helado artesanal elaborado con auténtico chocolate belga 70% cacao.',
    price: 3.50,
    imageUrl: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Helados Populares'
  },
  {
    id: 'p2',
    name: 'Torta Selva Negra',
    description: 'Clásica torta alemana con bizcocho de chocolate, cerezas y crema chantilly.',
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Tortas y Postres'
  },
  {
    id: 'p3',
    name: 'Brownie con Helado',
    description: 'Brownie tibio de chocolate fundido acompañado de una bola de helado de vainilla.',
    price: 4.00,
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Tortas y Postres'
  },
  {
    id: 'p4',
    name: 'Frappé de Moka',
    description: 'Refrescante mezcla de café expreso, leche y sirope de chocolate coronado con crema.',
    price: 3.00,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Cafés'
  },
  {
    id: 'p5',
    name: 'Helado de Vainilla con Chips',
    description: 'Helado cremoso de vainilla con abundantes chips de chocolate.',
    price: 3.00,
    imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Helados Populares'
  },
  {
    id: 'p6',
    name: 'Torta de Cumpleaños Mágica',
    description: 'Bizcocho esponjoso relleno de crema pastelera y decorado con chispas de colores, ideal para celebrar.',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Tortas de cumpleaños'
  },
  {
    id: 'p7',
    name: 'Torta Elegante de 15 Años',
    description: 'Espectacular torta de tres pisos cubierta de fondant blanco con detalles en rosa pastel.',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Tortas de 15 años'
  }
];
