<template>
  <div class="hello-world">
    <h1>Hello World from Vue Package!</h1>
    <p>This is a simple Vue component from our monorepo.</p>
  </div>
</template>

<script setup lang="ts">
// No props needed
</script>

<style scoped>
.hello-world {
  text-align: center;
  padding: 2rem;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.hello-world h1 {
  color: #3b82f6;
  margin-bottom: 1rem;
}

.hello-world p {
  color: #6b7280;
}
</style>