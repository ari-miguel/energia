<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title color="warning">Formulario</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>

      <UploadForms/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import UploadForms from '@/components/UploadForms.vue';
</script>
