<script>
import LoadingSpinner from './components/molecules/LoadingSpinner.vue'

export default {
  name: 'App',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  watch: {
    isLoading(newVal) {
      if (newVal) {
        document.body.classList.add('loading')
      } else {
        document.body.classList.remove('loading')
      }
    }
  }
}
</script>

<template>
  <div :class="{ loading: isLoading }">
    <LoadingSpinner :isLoading="isLoading" />
    <RouterView />
  </div>
</template>

<style>
body.loading {
  background-color: #12111f;
}

body {
  background:
    url('/bg.png') no-repeat,
    url('/circle-green.png') no-repeat #12111f;
  background-size: 100%;
}
</style>
