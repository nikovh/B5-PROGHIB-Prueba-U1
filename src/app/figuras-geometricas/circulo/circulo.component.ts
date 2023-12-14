import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FigurasGeometricasService {
  constructor() {}
}

abstract class FiguraGeometrica {
  nombre: string = '';

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(nombre: string, radio: number) {
    super(nombre);
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return Math.PI * this.radio * 2;
  }
}