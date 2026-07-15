<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main>
    <div class="content">
      <h2 class="content__title"><em>{{ error?.statusCode === 404 ? '404 - Page Not Found' : 'An Error Occurred' }}</em></h2>
      <p>Return <a href="#" @click.prevent="handleError">Home</a></p>
    </div>
  </main>
</template>
