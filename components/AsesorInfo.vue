<template>
    <ion-card class="asesor-card">
      <ion-item lines="none" class="asesor-header">
        <ion-avatar slot="start">
          <img src="@/assets/miguel.jpg" alt="Avatar del Asesor">
        </ion-avatar>
        <ion-label>
          <h2>{{ asesor.nombre_completo }}</h2>
          <p>{{ asesor.titulo }}</p>
        </ion-label>
      </ion-item>
      <ion-item-divider color="light"></ion-item-divider>
      <ion-card-content>
        <ion-item lines="none">
          <ion-icon name="mail-outline" slot="start"></ion-icon>
          <p><strong>Correo Electrónico:</strong> {{ asesor.email }}</p>
        </ion-item>
        <ion-item-divider color="light"></ion-item-divider>
        <ion-item lines="none">
          <ion-icon name="call-outline" slot="start"></ion-icon>
          <p><strong>Teléfono:</strong> {{ asesor.telefono }}</p>
        </ion-item>
        <ion-item-divider color="light"></ion-item-divider>
        <ion-item lines="none">
          <ion-icon name="business-outline" slot="start"></ion-icon>
          <p><strong>Especialidad:</strong> {{ asesor.especialidad }}</p>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { IonCard, IonItem,IonCardContent,IonIcon, IonItemDivider, IonLabel, IonAvatar} from '@ionic/vue';
import { addIcons } from 'ionicons';
import { mailOutline,callOutline,businessOutline} from 'ionicons/icons';
addIcons({ 'mail-outline': mailOutline, 'call-outline': callOutline, 'business-outline': businessOutline, });
  
  // Datos ficticios del asesor energético
  const asesor = ref({
    nombre_completo: 'Juan Pérez',
    titulo: 'Ingeniero en Energía',
    email: 'juan.perez@example.com',
    telefono: '123-456-7890',
    especialidad: 'Eficiencia Energética',
  });
  </script>
  
  <style scoped>
  .asesor-card {
    --ion-background-color: #fef7e2;
    --ion-text-color: #343a40;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .asesor-header {
    --padding-start: 16px;
    --padding-end: 16px;
  }
  
  .asesor-header h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #343a40;
    margin: 0;
  }
  
  .asesor-header p {
    font-size: 0.9rem;
    color: #6c757d;
    margin: 0;
  }
  
  ion-item-divider {
    height: 1px;
    background-color: #e9ecef;
    margin: 8px 0;
  }
  
  ion-card-content p {
    font-size: 0.95rem;
    color: #495057;
    margin: 8px 0;
  }
  
  ion-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  
  ion-icon {
    color: #f8b400;
    margin-right: 8px;
  }
  
  /* Estilos responsivos */
  @media (max-width: 600px) {
    .asesor-header h2 {
      font-size: 1rem;
    }
  
    .asesor-header p {
      font-size: 0.8rem;
    }
  
    ion-card-content p {
      font-size: 0.85rem;
    }
  }
  </style>
  