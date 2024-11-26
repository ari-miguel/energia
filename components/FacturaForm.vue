<template>
    <ion-card class="factura-card">
      <ion-card-header>
        <ion-card-title>Adjuntar Factura</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Nombre Completo</ion-label>
          <ion-input type="text" placeholder="Ingresa tu nombre completo"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Correo Electrónico</ion-label>
          <ion-input type="email" placeholder="Ingresa tu correo electrónico"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Adjunta tu Factura</ion-label>
          <input type="file" accept="application/pdf, image/*" />
        </ion-item>
        <ion-button expand="full" color="tertiary">Enviar</ion-button>
      </ion-card-content>
    </ion-card>
  </template>
  
<script setup lang="ts">
import { IonCard,IonCardHeader,IonItem,IonCardContent, IonButton, IonLabel, IonInput,IonCardTitle} from '@ionic/vue';

  </script>
  
  <style scoped>
  .factura-card {
    --ion-background-color: #fef7e2;
    --ion-text-color: #343a40;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 16px;
  }
  
  ion-card-title {
    color: #343a40;
  }
  
  ion-button {
    margin-top: 16px;
  }
  </style>
  