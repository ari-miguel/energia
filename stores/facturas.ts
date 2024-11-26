import { defineStore } from "pinia";
import { supabase } from "../lib/supabaseClient.js";
import { ref } from "vue";
import axios from "axios";



export const useFacturas = defineStore("facturas", () => {

    const mensaje = ref("");
    const texto = ref<string>('');
    const nombre_completo = ref("");
    const kwh = ref("")
    const comercializadora = ref("")
    const punta = ref("")
    const valle = ref("")

    
    const subirArchivo = async (selectedFile: File | any) => {

        console.log(selectedFile)
        subirArchivoServidor(selectedFile)

        
        
        const { data, error } = await supabase.storage
          .from("facturas")
          .upload(`public/${selectedFile.name}`, selectedFile, {
            cacheControl: "3600",
            upsert: false,
          });

        console.log(data?.id)
    
        if (!error) {
          mensaje.value = `Archivo cargado correctamente ${selectedFile.name}`;
        } else {
          mensaje.value = error.message;
        }
    
        const fileUrl = `https://vncgnkncriwsbqviqmuq.supabase.co/storage/public/${selectedFile.name}`;
        const clientId = 1;
        const { error: e } = await supabase
          .from("archivos")
          .insert({ id: clientId, file_url: fileUrl });
    
        if (!e) {
          console.log("Archivo asociado al cliente exitosamente:");
        } else {
          console.log(e.message);
        }
    
      }

      const subirArchivoServidor = async (selectedFile:File) => {
        if (!selectedFile) {
          alert("Por favor, selecciona un archivo primero.");
          return;
        }
    
    
    
        const formData = new FormData();
        formData.append("file", selectedFile);
    
        try {
          const response = await axios.post('http://localhost:5000/upload',
             formData,
    
             { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true});
    
    
          if (response.status === 200) {
            nombre_completo.value = ""
            kwh.value = ""
            comercializadora.value = ""
            punta.value = ""
            valle.value = ""
            texto.value = response.data.text;
            nombre_completo.value = response.data.text.nombre_completo
            kwh.value = response.data.text.kwh + " " + "€"
            comercializadora.value = response.data.text.comercializadora
            punta.value = `P1: ${response.data.text.punta}`
            valle.value = `P1: ${response.data.text.valle}`
            console.log(response)
            console.log(texto.value)
            //alert("Archivo subido exitosamente.");
          } else {
            //alert("Error al subir el archivo.");
          }
        } catch (error) {
          console.error("Error al subir el archivo:", error);
        }
      }

      return {
        
        subirArchivo,
        subirArchivoServidor,
        mensaje,
        texto,
        nombre_completo,
        kwh,
        comercializadora,
        punta,
        valle
        
      };



})