import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  detalles: string;
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Laptop 1',
      descripcion: 'Ideial para regalos y felicitaciones',
      precio: 800,
      imagen: '/img/lol.jpg',
      detalles: 'Este adorno es perfecto para cumpleaños y ocasiones especiales.'
    },
    {
      id: 2,
      nombre: 'Laptop 2',
      descripcion: 'Este articulo es lo mejor para regalos especiales',
      precio: 1100,
      imagen: '/img/lol.jpg',
      detalles: 'Un adorno único con detalles artesanales.'
    },
    {
      id: 3,
      nombre: 'Laptop 3',
      descripcion: 'Nuestro adorno mas cara que tenemos, solo para esa persona especial',
      precio: 2300,
      imagen: '/img/lol.jpg',
      detalles: 'Un adorno para una persona realmente especial y que valga mucho la pena.'
    },
    {
      id: 4,
      nombre: 'Laptop 4',
      descripcion: 'El modelo mas economico que tengo',
      precio: 500,
      imagen: '/img/lol.jpg',
      detalles: 'Un adorno quep puede llegar a ser para cualquier ocasion.'
    }
  ];

  
  
carouselImages = [
  { src: 'https://i.pinimg.com/474x/c7/5a/ed/c75aedb0e23f1c802d93846d4ae93ffd.jpg', alt: 'Laptop 1' },
  { src: 'https://i.pinimg.com/474x/c7/5a/ed/c75aedb0e23f1c802d93846d4ae93ffd.jpg', alt: 'Laptop 2' },
  { src: 'https://i.pinimg.com/474x/c7/5a/ed/c75aedb0e23f1c802d93846d4ae93ffd.jpg', alt: 'Laptop 3' }
];
  

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getCarouselImages() {
    return this.carouselImages;
  }
}