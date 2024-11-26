<template>


    <ion-content>
        <ion-grid fixed>
            <ion-row>
                <ion-col size="12">
                    <input class="ion-margin-top ion-margin-botton" @change="handleFileChange" type="file" id="archivo" name="archivo">
                </ion-col>
                <ion-col size="12">
                    <ion-button @click="store.subirArchivo(selectedFile![0])" fill="outline">Upload</ion-button>
                </ion-col>

                <ion-col size="12">
                    <p>{{store.nombre_completo}}</p>
                </ion-col>
            </ion-row>
        </ion-grid>
        <div>
            
        </div>
        <div>
            
        </div>
        


    </ion-content>
</template>

<script setup lang="ts">
import { IonGrid, IonRow,IonCol, IonContent,IonButton} from '@ionic/vue';
import {ref} from "vue"
import { useFacturas } from '../stores/facturas'
const store = useFacturas()
const selectedFile = ref<FileList | null>(null);

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement; 
    selectedFile.value = target.files; 
}



</script>