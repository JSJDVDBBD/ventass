import { Component, OnInit } from '@angular/core';
import { Productos } from './products'; // Asegúrate de que la ruta sea correcta
import { Products } from '../../services/products';
import { sampleTime } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  productos: any[] = [];
  productoSeleccionado: any = null;
  currentSlide = 0;
  carouselImages = [
    { src: '/img/lol.jpg', alt: 'Laptop 1' },
    { src: '/img/lol.jpg', alt: 'Laptop 2' },
    { src: '/img/lol.jpg', alt: 'Laptop 3' }
  ];
  private intervalId: any;

  constructor(private productsService: Products) {}

  ngOnInit(): void {
    this.productos = this.productsService.getProducts();
    this.startCarousel();
  }

  abrirDetalles(producto: any): void {
    this.productoSeleccionado = producto;
  }

  cerrarDetalles(): void {
    this.productoSeleccionado = null;
  }

  // Métodos para el carrusel
  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia de slide cada 3 segundos
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
    this.resetInterval();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.resetInterval();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetInterval();
  }

  resetInterval(): void {
    clearInterval(this.intervalId);
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
sampleTime