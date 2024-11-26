<template>
  <ion-page>
    <ion-toolbar>
      <ion-title></ion-title>
    </ion-toolbar>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Datos</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="handleSubmit">
            <ion-item>
              <ion-label position="stacked">Nombre Completo</ion-label>
              <ion-input
                v-model="formData.name"
                type="text"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Correo Electrónico</ion-label>
              <ion-input
                v-model="formData.email"
                type="email"
                required
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label></ion-label>
              <input
                type="file"
                ref="fileInput"
                @change="handleFileChange"
                required
              />
            </ion-item>
            <ion-button
              
              @click="store.subirArchivo(archivoSeleccionado)"
              type="submit"
              expand="full"
              class="ion-margin-top"
              >Subir</ion-button
            >
          </form>
        </ion-card-content>
      </ion-card>
      
        

        
        <ion-grid v-if="spinner">
          <ion-row class="ion-justify-content-center">
            <ion-col size="auto"><ion-spinner color="success"></ion-spinner></ion-col>
            
          </ion-row>
        </ion-grid>

      
        
      
      <ion-grid fixed v-if="visible">
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-lg="6">
            <h5 class="ion-text-center">Actual</h5>

            <ion-item>
              <ion-label>{{ store.comercializadora }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label class="ion-label">{{
                store.nombre_completo
              }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ store.kwh }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ store.punta }}kw</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>{{ store.valle }}kw</ion-label>
            </ion-item>
          </ion-col>
          <ion-col size="12" size-lg="6">
            <h5 class="ion-text-center">Rayo de luz</h5>

            <ion-item>
              <ion-label>Rayo</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <ion-badge color="success">64.55%</ion-badge>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>185kwh x 0.092010 €</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>P1: 0.093152kw</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>P2: 0.015205kw</ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  IonPage,
  IonInput,
  IonCard,
  IonCardTitle,
  IonContent,
  IonCardContent,
  IonItem,
  IonButton,
  IonCardHeader,
  IonLabel,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonTitle,
  IonBadge,
  toastController,
  IonSpinner
} from "@ionic/vue";

import { useFacturas } from "../stores/facturas";
const store = useFacturas();
const archivoSeleccionado = ref<File>();
const visible = ref(false)
const spinner = ref(false)
interface FormData {
  name: string;
  email: string;
  file: File | null;
}

const formData = ref<FormData>({
  name: "",
  email: "",
  file: null,
});

const fileInput = ref<HTMLInputElement | null>(null);

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    formData.value.file = input.files[0];
    archivoSeleccionado.value = formData.value.file;
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    file: null,
  };
};

async function presentToast() {
  const nombre = `Nombre: ${formData.value.name}`;
  const correo = `Correo: ${formData.value.email}`;
  const archivo = `Archivo: ${formData.value.file!.name}`;
  const mensaje = `${nombre} ${correo} ${archivo}`;
  const toast = await toastController.create({
    message: mensaje,
    duration: 3000,
    color:"success"
  });

  await toast.present();
}

const handleSubmit = () => {
  if (!formData.value.file) {
    alert("Por favor, selecciona un archivo.");
  }

  spinner.value = true

  presentToast()
  // Esta función se ejecutará después de 3 segundos (3000 milisegundos)
  setTimeout(() => {
    visible.value = true
    spinner.value = false
  }, 3000);

  
  
  // Aquí puedes manejar la lógica para enviar el formulario
  resetForm();
  fileInput.value!.value = "";
};

onMounted(()=>{
  visible.value = false
})
</script>

<style scoped>
/* Estilos adicionales para el formulario */
ion-card-title {
  color: #f8b400;
}

ion-button {
  --background: #f8b400;
}

ion-label {
  --font-size: 10;
}
</style>
