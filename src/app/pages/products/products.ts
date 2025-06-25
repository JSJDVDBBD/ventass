import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Productos {
handleImageError(_t11: any) {
throw new Error('Method not implemented.');
}
img: any;
  getCarouselImages(): any[] {
    throw new Error('Method not implemented.');
  }
  getProducts(): Product[] {
    throw new Error('Method not implemented.');
  }
carouselImages: any;
currentSlide: any;
goToSlide(arg0: number) {
throw new Error('Method not implemented.');
}
nextSlide() {
throw new Error('Method not implemented.');
}
prevSlide() {
throw new Error('Method not implemented.');
}
  productos: Product[] = [];
  productoSeleccionado: Product | null = null

  constructor(private productService: Products) {
    this.productos = this.productService.getProducts();
  }

  abrirDetalles(producto: Product): void {
    this.productoSeleccionado = producto;
    document.body.style.overflow = 'hidden'; // Evita el scroll cuando el modal está abierto
  }

  cerrarDetalles(): void {
    this.productoSeleccionado = null;
    document.body.style.overflow = 'auto'; // Restaura el scroll
  }

}
