<script>
import EscLogoSVG from '../atoms/logo.vue'
export default {
  name: 'LoadingComponent',
  components: {
    EscLogoSVG
  },
  props: {
    isLoading: Boolean
  }
}
</script>

<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-spinner">
      <div class="spinner">
        <EscLogoSVG />
        <div class="loader"></div>
      </div>
    </div>
  </transition>
</template>

<style>
.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #141320;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loader {
  margin-top: 20px;
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  33% {
    background-size:
      calc(100% / 3) 0%,
      calc(100% / 3) 100%,
      calc(100% / 3) 100%;
  }
  50% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 0%,
      calc(100% / 3) 100%;
  }
  66% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 100%,
      calc(100% / 3) 0%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
