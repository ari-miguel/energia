<template>
  <ion-grid fixed>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-sm="6" size-md="6" size-lg="6" size-xl="4">
        <ion-card>
          <ion-item lines="none" class="servicio-item">
            <ion-icon name="sunny-outline" slot="start"></ion-icon>
            <ion-label>
              <h4 style="color: orange; font-weight: bold;">Consultoría Energética</h4>
              <p style="font-size: x-small; font-weight: bold">
                Optimización de consumo y eficiencia energética.
              </p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-card class="image-container" style="height: 200px;">
                <ion-img 
                class="fit-cover"
    src="https://elements-resized.envatousercontent.com/envato-shoebox/ee6e/ee64-dddc-4db3-b53a-83d1b96323ea/IMG_0057%203.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=d3e6d764a8b477fe6f3a5e376d202f73f2f9520c4001bef322e65c379bcd3e4c"
    alt="The Wisconsin State Capitol building in Madison, WI at night"
  ></ion-img>
  
            </ion-card>
          </ion-item>
    <ion-item>
        <ion-button @click="navigateFacturasForm" color="danger">Ahorrar en el hogar</ion-button>
    </ion-item>
        </ion-card>
          
       
        
      </ion-col>

      <ion-col size="12" size-sm="6" size-md="6" size-lg="6" size-xl="4" >
        <ion-card>
          <ion-item lines="none" class="servicio-item">
            <ion-icon name="leaf-outline" slot="start"></ion-icon>
            <ion-label>
              <h4 style="color: orange; font-weight: bold;" >Auditorias Energéticas</h4>
              <p style="font-size: x-small; font-weight: bold">
                Evaluación detalla del uso de energía.
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-card class="image-container"  style="height: 200px;">
                <ion-img
                class="fit-cover"
    src="https://cdn.prod.website-files.com/622f1200e93dfc38fa52561b/62810b657e9c3855fe509873_controla-electricidad.jpg"
    alt="The Wisconsin State Capitol building in Madison, WI at night"
  ></ion-img>
            </ion-card>
          </ion-item>
          <ion-item>
        <ion-button color="danger">Ahorrar en tu empresa</ion-button>
    </ion-item>
        </ion-card>
      </ion-col>

      <ion-col size="12" size-sm="" size-md="6" size-lg="6" size-xl="4" >
        <ion-card>
          <ion-item lines="none" class="servicio-item">
            <ion-icon name="flash-outline" slot="start"></ion-icon>
            <ion-label>
              <h4 style="color: orange; font-weight: bold;">Gestión de Energía Renovable</h4>
              <p style="font-size: x-small; font-weight: bold">
                Implementación de soluciones sostenibles.
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-card class="image-container" style="height: 200px;">
                <ion-img
                class="fit-cover"
    src="https://xolary.com/wp-content/uploads/2023/10/paneles-solares-casa-casa-ecologica-sistema-solar-jpg.jpg"
    alt="The Wisconsin State Capitol building in Madison, WI at night"
  ></ion-img>
            </ion-card>
          </ion-item>
          <ion-item>
        <ion-button color="danger">Energía solar</ion-button>
    </ion-item>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  
</template>

<script setup lang="ts">
import { IonCard, IonItem, IonIcon, IonLabel,IonGrid,IonCol,IonRow,IonImg,IonButton } from "@ionic/vue";
import { addIcons } from "ionicons";
import { leafOutline, flashOutline, sunnyOutline,add } from "ionicons/icons";

import { useRouter } from 'vue-router';
const router = useRouter(); 

const navigateFacturasForm = () => { 
  router.push({ path: 'tab2' }); 
};

// Registramos los iconos que vamos a usar
addIcons({
  "leaf-outline": leafOutline,
  "flash-outline": flashOutline,
  "sunny-outline": sunnyOutline,
  "add":add
});
</script>

<style scoped>
.servicios-card {
  --ion-background-color: transparent;
  box-shadow: none;
  padding: 0;
}

.servicios-background {
  
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}

.servicios-content {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 20px;
}

h2 {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #f8b400;
}

.servicio-item ion-icon {
  font-size: 2rem;
  color: #f8b400;
}

.servicio-item h3 {
  font-size: 1.5rem;
  margin: 0;
}

.servicio-item p {
  font-size: 1rem;
  margin: 5px 0 0;
}

/* Estilos responsivos */
@media (max-width: 600px) {
  .servicios-content {
    padding: 15px;
  }
}

  h2 {
    font-size: 1.5rem;
  }

  .servicio-item h3 {
    font-size: 1.2rem;
  }

  .servicio-item p {
    font-size: 0.9rem;
  }

  .image-container {
  
  height: 200px;
  background-size: cover;
}

.fit-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
</style>
