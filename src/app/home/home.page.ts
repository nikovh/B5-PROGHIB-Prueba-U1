import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,  IonRow, IonCol, IonCard, IonList,
  IonItem, IonSelect, IonSelectOption, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonText, IonImg, IonButton, IonInput, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, homeOutline, alertCircleOutline } from 'ionicons/icons';
import { Circulo } from '../figuras-geometricas/circulo/circulo.component';
import { TrianguloEquilatero, TrianguloEscaleno } from '../figuras-geometricas/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonList,
    IonItem, IonSelect, IonSelectOption, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonText, IonImg, IonButton, IonInput, IonIcon, FormsModule, ReactiveFormsModule, NgIf, IonButtons ],
})
export class HomePage {
  mensaje: string = '';
  card_id: string = '';
  selectFigura: any;

  constructor(private router: Router, private formbuilder: FormBuilder) {
    addIcons({ add, homeOutline, alertCircleOutline });
  }

  fnSubmit(LadoA: IonInput, LadoB: IonInput, LadoC: IonInput) {
    if (LadoA.value == LadoB.value && LadoA.value == LadoC.value) {
      // Triángulo equilatero
      const triangulo = new TrianguloEquilatero(
        'equilatero',
        Number(LadoA.value)
      );
      this.mensaje =
        'El perimetro del triangulo equilatero es ' +
        triangulo.calcularPerimetroE();
    } else {
      const triangulo = new TrianguloEscaleno(
        'equilatero',
        Number(LadoA.value),
        Number(LadoB.value),
        Number(LadoC.value)
      );
      this.mensaje =
        'El perimetro del triangulo escaleno es ' +
        triangulo.calcularPerimetro();
    }
  }

  fnSubmitCircle(radio: IonInput) {
    const circulo = new Circulo('neumatico', Number(radio.value));
    this.mensaje =
      'El perimetro del circulo es ' +
      circulo.calcularPerimetro().toFixed(2) +
      '';
  }

  fnseleccion() {
    this.mensaje = '';
    this.card_id = this.selectFigura;
  }

  fnreload() {
    this.card_id = '';
    this.selectFigura = 0;
    this.mensaje = '';
  }
}