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
    }, 0)
  }
}
</script>

<template>
  <LoadingSpinner :isLoading="isLoading" />
  <RouterView />
</template>
