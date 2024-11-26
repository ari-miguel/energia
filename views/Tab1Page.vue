<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="light">
        <ion-title style="color: orange;" >Asesor Energético</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="banner">
        <div class="banner-content">
          <h1>Bienvenido</h1>
          <p>Confía en nosotros para optimizar tu energía</p>
        </div>
      </div>
      <ServiciosAsesor/>
      
    </ion-content>
    <FooterComponent/>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from "@ionic/vue";
import ServiciosAsesor from "@/components/ServiciosAsesor.vue";
import FooterComponent from "@/components/FooterComponent.vue";

</script>

<style scoped>
/* Estilos de la página principal */
ion-toolbar {
  --background: #f8b400;
  --color: #ffffff;
}

ion-content {
  padding: 16px;
}

.banner {
  background-image: url("https://radiopanamericanadecolombia.com/wp-content/uploads/2023/10/luz-e1565566649502.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  font-weight: bold;
  color: rgb(223, 218, 217);
  padding: 50px 0;
}
.banner-content {
  
  display: inline-block;
  padding: 20px;
  border-radius: 8px;
}
.banner h1 {
  font-size: 2rem;
  margin: 0;
}
.banner p {
  font-size: 1.2rem;
  margin: 10px 0 0;
}
</style>
