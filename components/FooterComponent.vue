<template>
  <ion-footer class="footer">
    <ion-toolbar color="red">
      <div class="social-icons">
        <ion-button href="https://www.facebook.com" target="_blank" fill="clear">
          <ion-icon name="logo-facebook"></ion-icon>
        </ion-button>
        <ion-button href="https://www.twitter.com" target="_blank" fill="clear">
          <ion-icon name="logo-twitter"></ion-icon>
        </ion-button>
        <ion-button href="https://www.instagram.com" target="_blank" fill="clear">
          <ion-icon name="logo-instagram"></ion-icon>
        </ion-button>
        <ion-button href="https://www.linkedin.com" target="_blank" fill="clear">
          <ion-icon name="logo-linkedin"></ion-icon>
        </ion-button>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { addIcons } from 'ionicons';
import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from 'ionicons/icons';

addIcons({
  'logo-facebook': logoFacebook,
  'logo-twitter': logoTwitter,
  'logo-instagram': logoInstagram,
  'logo-linkedin': logoLinkedin,
});

</script>

<style scoped>
.footer {
  --ion-background-color: #f8b400;
  --ion-text-color: #ffffff;
  text-align: center;
  padding: 16px 0;
  background-color: #ffffff;
  
}

.social-icons {
  display: flex;
  justify-content: center;
}

ion-button {
  --color: white;
  margin: 0 8px;
}

ion-icon {
  font-size: 24px;
  color: #f8b400
}
</style>
