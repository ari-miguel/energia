<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="calculatorOutline" />
          <ion-label>Comparador</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="folderOpenOutline" />
          <ion-label>Otros</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { folderOpenOutline,home,homeOutline,calculatorOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  home: homeOutline,
});
</script>

<style scoped>
.custom-tab-bar {
  --color-selected: var(--ion-color-tab-text-active);
  --color: var(--ion-color-tab-text-inactive);
  ion-icon {
    color: var(--ion-color-tab-icon-inactive);
  }
  ion-tab-button[selected] ion-icon {
    color: var(--ion-color-tab-icon-active);
  }
}
</style>
